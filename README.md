# FLAVOUR — System Overview

This repository contains a small e-commerce web application composed of a React TypeScript frontend and an Express backend. It is a development/demo project that demonstrates typical e-commerce features and how a minimal full-stack flow can be implemented and tested locally.

Key system components
- Frontend: React + TypeScript app (client-side routing, pages for shop, product, cart, contact, auth).
- Backend: Express API server (JSON file as a simple datastore) providing REST endpoints for products, cart, contact, and authentication (JWT).
- Persistence: `server/db.json` stores seeded products and runtime data (users, contacts, carts) for local development.

How to run locally
1. Install frontend deps (project root):
```bash
npm install
```
2. Install server deps and initialize the local JSON DB:
```bash
cd server
npm install
node init_db.js
cd ..
```
3. Start the backend (default port 4000):
```bash
npm run start:server
```
4. Start the frontend dev server (CRA):
```bash
npm start
```
5. Open the app in your browser at the port CRA chooses (usually `http://localhost:3000`). The frontend talks to the backend at `/api/*` when both are run locally.

Project scripts (root)
- `npm start` — start frontend dev server
- `npm run start:server` — start the backend API server
- `npm run init:db` — initialize server JSON DB (seeds products)
- `npm run test:server` — basic server smoke tests

Notes and next steps
- This repository uses a simple JSON file as the development datastore; for production use replace with a proper database (Postgres, SQLite, etc.) and secure secret management.
- JWT secret and other configuration values come from environment variables (see `server/.env.example`).
- Recommended next steps for production readiness: migrate to a managed database, add HTTPS and CORS policies for production, and add a deployment pipeline.

License
- MIT

