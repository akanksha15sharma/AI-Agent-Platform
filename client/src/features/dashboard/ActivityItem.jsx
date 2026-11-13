import { cn } from '../../utils/cn';
import { activityMeta } from './activityMeta';

export default function ActivityItem({ item }) {
  const { icon: Icon, style } = activityMeta[item.type];

  return (
    <li className="flex gap-3 px-5 py-4">
      <span className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-full', style)}>
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-sm leading-relaxed text-slate-600">
          <span className="font-medium text-slate-900">{item.agent}</span> {item.message}
        </p>
        <p className="mt-0.5 text-xs text-slate-500">{item.time}</p>
      </div>
    </li>
  );
}
