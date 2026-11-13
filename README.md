# AI Agent Platform

Full-stack platform for building and running AI agents.

**Stack:** React + Vite + Tailwind CSS · Node.js + Express · MongoDB + Mongoose · JWT + bcrypt · OpenAI + LangChain.js

## Getting started

Requirements: Node.js 20.6+ and a MongoDB instance (local or Atlas).

```bash
npm run install:all
cp server/.env.example server/.env
cp client/.env.example client/.env
npm run dev
```

- Client: http://localhost:5173
- API: http://localhost:5001
- Health check: `curl http://localhost:5001/api/health`

## Structure

```
client/   React app (Vite)
server/   Express API
```
