export const env = Object.freeze({
  apiUrl: (import.meta.env.VITE_API_URL ?? 'http://localhost:5001/api').replace(
    /\/$/,
    '',
  ),
});
