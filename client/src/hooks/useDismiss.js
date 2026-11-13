import { useEffect } from 'react';

// Calls onDismiss when the user clicks outside `ref` or presses Escape.
export function useDismiss(ref, onDismiss, enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const handlePointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) onDismiss();
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onDismiss();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref, onDismiss, enabled]);
}
