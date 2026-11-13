import { Menu, Plus } from 'lucide-react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import NotificationsMenu from './NotificationsMenu';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

export default function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-2 border-b border-slate-200 bg-white/85 px-4 backdrop-blur sm:gap-3 sm:px-6 lg:px-8">
      <IconButton label="Open navigation" onClick={onMenuClick} className="-ml-2 lg:hidden">
        <Menu className="h-5 w-5" aria-hidden="true" />
      </IconButton>

      <SearchBar className="min-w-0 flex-1 md:max-w-md" />

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <Button to="/agents/new" aria-label="Create agent" className="max-sm:w-10 max-sm:px-0">
          <Plus className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Create agent</span>
        </Button>
        <NotificationsMenu />
        <UserMenu />
      </div>
    </header>
  );
}
