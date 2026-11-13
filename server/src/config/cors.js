import { env } from './env.js';

export const corsOptions = {
  origin(origin, callback) {
    // Requests without an Origin header (curl, server-to-server) are allowed.
    if (!origin || env.clientOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`Origin ${origin} is not allowed by CORS`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
