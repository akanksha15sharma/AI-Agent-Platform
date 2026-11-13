import { Bell } from 'lucide-react';
import IconButton from '../ui/IconButton';
import Popover from '../ui/Popover';

export default function NotificationsMenu() {
  return (
    <Popover
      panelClassName="w-72 max-w-[calc(100vw-2rem)]"
      renderTrigger={({ open, toggle }) => (
        <IconButton label="Notifications" aria-expanded={open} aria-haspopup="true" onClick={toggle}>
          <Bell className="h-5 w-5" aria-hidden="true" />
        </IconButton>
      )}
    >
      <div className="border-b border-slate-100 px-4 py-3 text-sm font-semibold">Notifications</div>
      <div className="px-4 py-8 text-center">
        <p className="text-sm font-medium text-slate-900">You&rsquo;re all caught up</p>
        <p className="mt-1 text-sm text-slate-500">New alerts from your agents will appear here.</p>
      </div>
    </Popover>
  );
}
