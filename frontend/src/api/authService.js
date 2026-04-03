import axios from "axios";
import { API_BASE_URL } from "./appConfig";

const API_TIMEOUT_MS = 6000;

const STORAGE_KEYS = {
  users: "bytebridge_users",
  session: "bytebridge_session",
  legacyToken: "token",
  legacyUser: "user",
};

const isBrowser = typeof window !== "undefined";

function readJson(key, fallback) {
  if (!isBrowser) return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  if (!isBrowser) return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function removeValue(key) {
  if (!isBrowser) return;
  window.localStorage.removeItem(key);
}

function normalizeEmail(email = "") {
  return email.trim().toLowerCase();
}

function sanitizeUser(user) {
  return {
    id: user.id || user._id || `local-${normalizeEmail(user.email)}`,
    name: user.name?.trim() || "ByteBridge Student",
    email: normalizeEmail(user.email),
    joinedAt: user.joinedAt || user.createdAt || new Date().toISOString(),
  };
}

function buildSession(authPayload) {
  return {
    token: authPayload.token,
    user: sanitizeUser(authPayload.user),
  };
}

async function hashPassword(password) {
  if (isBrowser && window.crypto?.subtle) {
    const encoded = new TextEncoder().encode(password);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", encoded);
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  return password;
}

function getLocalUsers() {
  return readJson(STORAGE_KEYS.users, []);
}

function setLocalUsers(users) {
  writeJson(STORAGE_KEYS.users, users);
}

function createLocalToken(user) {
  if (isBrowser && typeof window.btoa === "function") {
    return `local-${window.btoa(`${user.email}:${Date.now()}`)}`;
  }

  return `local-${Date.now()}`;
}

function validateRegisterPayload({ name, email, password }) {
  if (!name?.trim()) {
    throw { message: "Please enter your full name." };
  }

  if (!email?.trim()) {
    throw { message: "Please enter your email address." };
  }

  if (!password) {
    throw { message: "Please enter a password." };
  }

  if (password.length < 6) {
    throw { message: "Password must be at least 6 characters long." };
  }
}

function normalizeAuthError(error, fallbackMessage) {
  return error?.response?.data || error?.data || { message: error?.message || fallbackMessage };
}

function shouldUseLocalFallback(error) {
  const status = error?.response?.status;
  return !error?.response || status >= 500 || status === 404 || status === 502 || status === 504;
}

function hasLocalUser(email) {
  const normalizedEmail = normalizeEmail(email);
  return getLocalUsers().some((user) => user.email === normalizedEmail);
}

export function getStoredSession() {
  const session = readJson(STORAGE_KEYS.session, null);
  if (session?.token && session?.user) {
    return buildSession(session);
  }

  if (!isBrowser) {
    return null;
  }

  const legacyToken = window.localStorage.getItem(STORAGE_KEYS.legacyToken);
  const legacyUser = readJson(STORAGE_KEYS.legacyUser, null);

  if (legacyToken && legacyUser) {
    const migrated = buildSession({ token: legacyToken, user: legacyUser });
    persistSession(migrated);
    return migrated;
  }

  return null;
}

export function persistSession(authPayload) {
  const session = buildSession(authPayload);
  writeJson(STORAGE_KEYS.session, session);

  if (isBrowser) {
    window.localStorage.setItem(STORAGE_KEYS.legacyToken, session.token);
    writeJson(STORAGE_KEYS.legacyUser, session.user);
  }

  return session;
}

export function clearStoredSession() {
  removeValue(STORAGE_KEYS.session);
  removeValue(STORAGE_KEYS.legacyToken);
  removeValue(STORAGE_KEYS.legacyUser);
}

export function isUserAuthenticated() {
  return Boolean(getStoredSession()?.token);
}

export function getStoredUser() {
  return getStoredSession()?.user || null;
}

async function registerLocally(userData) {
  validateRegisterPayload(userData);

  const normalizedEmail = normalizeEmail(userData.email);
  const users = getLocalUsers();
  const existingUser = users.find((user) => user.email === normalizedEmail);

  if (existingUser) {
    throw { message: "User already exists. Please sign in instead." };
  }

  const newUser = {
    id: `local-${Date.now()}`,
    name: userData.name.trim(),
    email: normalizedEmail,
    passwordHash: await hashPassword(userData.password),
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  setLocalUsers(users);

  const session = {
    token: createLocalToken(newUser),
    user: sanitizeUser(newUser),
  };

  persistSession(session);

  return {
    message: "Account created successfully. You are now signed in.",
    ...session,
  };
}

async function loginLocally(credentials) {
  const normalizedEmail = normalizeEmail(credentials.email);
  const users = getLocalUsers();
  const user = users.find((item) => item.email === normalizedEmail);

  if (!user) {
    throw { message: "No account found with this email. Please register first." };
  }

  const incomingPasswordHash = await hashPassword(credentials.password);

  if (user.passwordHash !== incomingPasswordHash) {
    throw { message: "Incorrect password. Please try again." };
  }

  const session = {
    token: createLocalToken(user),
    user: sanitizeUser(user),
  };

  persistSession(session);

  return {
    message: "Login successful.",
    ...session,
  };
}

export const registerUser = async (userData) => {
  const payload = {
    name: userData.name?.trim(),
    email: normalizeEmail(userData.email),
    password: userData.password,
  };

  validateRegisterPayload(payload);

  try {
    const res = await axios.post(`${API_BASE_URL}/register`, payload, {
      timeout: API_TIMEOUT_MS,
    });

    if (res.data?.token && res.data?.user) {
      persistSession(res.data);
      return res.data;
    }

    const loginResponse = await axios.post(
      `${API_BASE_URL}/login`,
      { email: payload.email, password: payload.password },
      { timeout: API_TIMEOUT_MS }
    );

    persistSession(loginResponse.data);

    return {
      message: res.data?.message || "Account created successfully.",
      token: loginResponse.data.token,
      user: loginResponse.data.user,
    };
  } catch (error) {
    if (shouldUseLocalFallback(error)) {
      return registerLocally(payload);
    }

    throw normalizeAuthError(error, "Registration failed");
  }
};

export const loginUser = async (credentials) => {
  const payload = {
    email: normalizeEmail(credentials.email),
    password: credentials.password,
  };

  try {
    const res = await axios.post(`${API_BASE_URL}/login`, payload, {
      timeout: API_TIMEOUT_MS,
    });

    persistSession(res.data);
    return res.data;
  } catch (error) {
    if (shouldUseLocalFallback(error) || hasLocalUser(payload.email)) {
      return loginLocally(payload);
    }

    throw normalizeAuthError(error, "Login failed");
  }
};

export const logoutUser = () => {
  clearStoredSession();
};
