import { cn } from '../../utils/cn';

const tones = {
  neutral: { wrap: 'bg-slate-100 text-slate-600 ring-slate-500/15', dot: 'bg-slate-400' },
  success: { wrap: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20', dot: 'bg-emerald-500' },
  warning: { wrap: 'bg-amber-50 text-amber-700 ring-amber-600/20', dot: 'bg-amber-500' },
};

export default function Badge({ tone = 'neutral', dot = false, children }) {
  const style = tones[tone];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset',
        style.wrap,
      )}
    >
      {dot && <span className={cn('h-1.5 w-1.5 rounded-full', style.dot)} aria-hidden="true" />}
      {children}
    </span>
  );
}
