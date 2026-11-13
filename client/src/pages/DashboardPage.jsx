import {
  TEMP_CURRENT_USER,
  TEMP_DASHBOARD_STATS,
  TEMP_RECENT_ACTIVITY,
  TEMP_RECENT_AGENTS,
} from '../data/temporaryData';
import RecentActivity from '../features/dashboard/RecentActivity';
import RecentAgents from '../features/dashboard/RecentAgents';
import StatsGrid from '../features/dashboard/StatsGrid';
import WelcomeHeader from '../features/dashboard/WelcomeHeader';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeHeader user={TEMP_CURRENT_USER} />
      <StatsGrid stats={TEMP_DASHBOARD_STATS} />
      <div className="grid gap-8 xl:grid-cols-3">
        <RecentAgents agents={TEMP_RECENT_AGENTS} className="xl:col-span-2" />
        <RecentActivity items={TEMP_RECENT_ACTIVITY} />
      </div>
    </div>
  );
}
