import { cn } from '../../utils/cn';

export default function IconButton({ label, className, children, ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors duration-150',
        'hover:bg-slate-100 hover:text-slate-900',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
