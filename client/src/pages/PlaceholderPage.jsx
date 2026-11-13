import Card from '../components/ui/Card';
import EmptyState from '../components/ui/EmptyState';

// Stand-in for sections that are planned but not built yet, so every
// navigation link resolves to a real route.
export default function PlaceholderPage({ title, description, icon }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
      <Card className="mt-6">
        <EmptyState icon={icon} title="Not built yet" description={description} />
      </Card>
    </div>
  );
}
