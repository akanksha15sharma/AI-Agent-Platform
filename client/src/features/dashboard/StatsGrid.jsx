import { Bot, CheckCircle2, MessagesSquare, Zap } from 'lucide-react';
import StatCard from './StatCard';

export default function StatsGrid({ stats }) {
  const cards = [
    { label: 'Total agents', value: stats.totalAgents, icon: Bot, tone: 'brand' },
    { label: 'Active agents', value: stats.activeAgents, icon: Zap, tone: 'emerald' },
    { label: 'Total conversations', value: stats.totalConversations, icon: MessagesSquare, tone: 'sky' },
    { label: 'Tasks completed', value: stats.tasksCompleted, icon: CheckCircle2, tone: 'amber' },
  ];

  return (
    <section aria-label="Overview" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatCard key={card.label} {...card} />
      ))}
    </section>
  );
}
