import { isProduction } from '../config/env.js';

// Express identifies error handlers by their four-argument signature.
// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  const isCorsError = err.message?.includes('not allowed by CORS');
  const statusCode = err.statusCode ?? (isCorsError ? 403 : 500);

  if (statusCode >= 500) console.error(err);

  res.status(statusCode).json({
    status: 'error',
    message:
      statusCode >= 500 && isProduction ? 'Internal server error' : err.message,
  });
};
