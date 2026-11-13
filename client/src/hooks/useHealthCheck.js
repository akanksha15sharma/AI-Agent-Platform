import { useEffect, useState } from 'react';
import { getHealth } from '../services/health.service';

export function useHealthCheck() {
  const [state, setState] = useState({ status: 'loading', data: null, error: null });

  useEffect(() => {
    const controller = new AbortController();

    getHealth(controller.signal)
      .then((data) => setState({ status: 'ok', data, error: null }))
      .catch((error) => {
        if (error.name === 'AbortError') return;
        setState({ status: 'error', data: null, error: error.message });
      });

    return () => controller.abort();
  }, []);

  return state;
}
