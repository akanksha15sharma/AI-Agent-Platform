import { useCallback, useRef, useState } from 'react';
import { useDismiss } from '../../hooks/useDismiss';
import { cn } from '../../utils/cn';

// Anchored panel that closes on outside click or Escape.
// `renderTrigger({ open, toggle })` draws the button; `children` may be a
// function receiving `{ close }`.
export default function Popover({ renderTrigger, children, panelClassName }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, close, open);

  return (
    <div ref={ref} className="relative">
      {renderTrigger({ open, toggle: () => setOpen((value) => !value) })}
      {open && (
        <div
          className={cn(
            'absolute right-0 z-50 mt-2 animate-pop rounded-xl border border-slate-200 bg-white shadow-lg',
            panelClassName,
          )}
        >
          {typeof children === 'function' ? children({ close }) : children}
        </div>
      )}
    </div>
  );
}
