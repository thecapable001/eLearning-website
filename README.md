# ByteBridge eLearning Website

ByteBridge is split into two deployable apps:

- `frontend/` - React + Vite client
- `backend/` - Express + MongoDB API

The backend now also serves feedback APIs, so the frontend no longer depends on the old Render endpoint.

## Local Run

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
npm install
npm run dev
```

The frontend dev server proxies `/api` to `http://localhost:3000`, so auth and feedback work locally without changing URLs.

## Environment Setup

Frontend:

- Copy `frontend/.env.example` to `frontend/.env`
- Set `VITE_API_BASE_URL` to your deployed backend URL plus `/api`

Backend:

- Copy `backend/.env.example` to `backend/.env`
- Set `DB_URL`
- Set `JWT_SECRET`

## Vercel Deploy

Deploy this repo as two Vercel projects using Vercel's monorepo root-directory support:

1. Create a backend project with Root Directory set to `backend/`
2. Add `DB_URL` and `JWT_SECRET` in that backend project's environment variables
3. Deploy the backend and copy its production URL
4. Create a frontend project with Root Directory set to `frontend/`
5. Add `VITE_API_BASE_URL=https://your-backend-domain.vercel.app/api` to the frontend project's environment variables
6. Deploy the frontend

Notes:

- `frontend/vercel.json` handles SPA rewrites for React Router
- The backend can be deployed directly on Vercel as an Express project
- Root-level Codex metadata has been moved out of the project root and ignored from git/deploy
