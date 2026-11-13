import { Activity } from 'lucide-react';
import Card from '../../components/ui/Card';
import EmptyState from '../../components/ui/EmptyState';
import ActivityItem from './ActivityItem';

export default function RecentActivity({ items, className }) {
  return (
    <section aria-labelledby="recent-activity-title" className={className}>
      <h2 id="recent-activity-title" className="mb-4 text-lg font-semibold tracking-tight">
        Recent activity
      </h2>
      <Card>
        {items.length === 0 ? (
          <EmptyState
            icon={Activity}
            title="No activity yet"
            description="Conversations and completed tasks will show up here."
          />
        ) : (
          <ol className="divide-y divide-slate-100">
            {items.map((item) => (
              <ActivityItem key={item.id} item={item} />
            ))}
          </ol>
        )}
      </Card>
    </section>
  );
}
