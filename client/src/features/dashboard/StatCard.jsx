import Card from '../../components/ui/Card';
import { cn } from '../../utils/cn';

const tones = {
  brand: 'bg-brand-50 text-brand-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  sky: 'bg-sky-50 text-sky-600',
  amber: 'bg-amber-50 text-amber-600',
};

export default function StatCard({ icon: Icon, label, value, tone = 'brand' }) {
  return (
    <Card className="p-5 transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <span className={cn('flex h-9 w-9 items-center justify-center rounded-lg', tones[tone])}>
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight tabular-nums">
        {value.toLocaleString('en-US')}
      </p>
    </Card>
  );
}
