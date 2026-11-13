import { Eye, Pencil } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { categoryMeta, statusMeta } from './agentMeta';

export default function AgentCard({ agent }) {
  const { label: categoryLabel, icon: CategoryIcon } = categoryMeta[agent.category];
  const status = statusMeta[agent.status];

  return (
    <Card className="flex flex-col p-5 transition duration-200 hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          <CategoryIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <Badge tone={status.tone} dot>
          {status.label}
        </Badge>
      </div>

      <h3 className="mt-4 font-semibold text-slate-900">{agent.name}</h3>
      <p className="mb-5 mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600">{agent.description}</p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <span className="text-xs font-medium text-slate-500">{categoryLabel}</span>
        <div className="flex items-center gap-1.5">
          <Button to={`/agents/${agent.id}`} variant="secondary" size="sm" aria-label={`View ${agent.name}`}>
            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            View
          </Button>
          <Button to={`/agents/${agent.id}/edit`} variant="ghost" size="sm" aria-label={`Edit ${agent.name}`}>
            <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
            Edit
          </Button>
        </div>
      </div>
    </Card>
  );
}
