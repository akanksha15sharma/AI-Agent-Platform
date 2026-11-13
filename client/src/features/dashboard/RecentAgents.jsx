import { Link } from 'react-router-dom';
import { Bot, Plus } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import EmptyState from '../../components/ui/EmptyState';
import AgentCard from '../agents/AgentCard';
import { cn } from '../../utils/cn';

export default function RecentAgents({ agents, className }) {
  return (
    <section aria-labelledby="recent-agents-title" className={className}>
      <div className="mb-4 flex items-center justify-between">
        <h2 id="recent-agents-title" className="text-lg font-semibold tracking-tight">
          Recent agents
        </h2>
        <Link
          to="/agents"
          className="rounded text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          View all
        </Link>
      </div>

      {agents.length === 0 ? (
        <Card>
          <EmptyState
            icon={Bot}
            title="No agents yet"
            description="Create your first agent to see it here."
          >
            <Button to="/agents/new">
              <Plus className="h-4 w-4" aria-hidden="true" />
              Create agent
            </Button>
          </EmptyState>
        </Card>
      ) : (
        <div className={cn('grid gap-4 sm:grid-cols-2')}>
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      )}
    </section>
  );
}
