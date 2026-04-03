export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "/api").replace(/\/$/, "");
export const GOOGLE_BOOKS_API_KEY = (import.meta.env.VITE_GOOGLE_BOOKS_API_KEY || "").trim();
export const WEB3FORMS_ACCESS_KEY = (
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "b9fd69e0-c307-4f57-b90f-9c4106746fcb"
).trim();
export const HCAPTCHA_SITE_KEY = (
  import.meta.env.VITE_HCAPTCHA_SITE_KEY || "50b2fe65-b00b-4b9e-ad62-3ba471098be2"
).trim();
export const DEFAULT_FEEDBACK_AVATAR = "/img/bytebridge-bot-symbol.svg";
