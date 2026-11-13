import { request } from './api';

export const getHealth = (signal) => request('/health', { signal });
