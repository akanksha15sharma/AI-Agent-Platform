import { useHealthCheck } from '../hooks/useHealthCheck';

const dot = {
  loading: 'bg-amber-400',
  ok: 'bg-emerald-500',
  error: 'bg-red-500',
};

export default function ApiStatus() {
  const { status, data, error } = useHealthCheck();

  const label = {
    loading: 'Checking API…',
    ok: 'API online',
    error: error,
  }[status];

  return (
    <div
      role="status"
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
    >
      <span className={`h-2 w-2 rounded-full ${dot[status]}`} aria-hidden="true" />
      <span>
        {label}
        {status === 'ok' && (
          <span className="text-slate-500"> · database {data.database}</span>
        )}
      </span>
    </div>
  );
}
