import { cn } from '../../utils/cn';
import { getInitials } from '../../utils/initials';

const sizes = { sm: 'h-8 w-8 text-xs', md: 'h-9 w-9 text-sm' };

export default function Avatar({ name, size = 'md', className }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700',
        sizes[size],
        className,
      )}
    >
      {getInitials(name)}
    </span>
  );
}
