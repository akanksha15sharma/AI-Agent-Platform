import { Link } from 'react-router-dom';
import { ChevronDown, LogOut, Settings } from 'lucide-react';
import { TEMP_CURRENT_USER } from '../../data/temporaryData';
import Avatar from '../ui/Avatar';
import Popover from '../ui/Popover';
import { cn } from '../../utils/cn';

const itemClasses =
  'flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors duration-150 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-brand-600';

export default function UserMenu() {
  return (
    <Popover
      panelClassName="w-60"
      renderTrigger={({ open, toggle }) => (
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label="Open user menu"
          className="flex items-center gap-2 rounded-lg p-1 pr-1.5 transition-colors duration-150 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:pr-2"
        >
          <Avatar name={TEMP_CURRENT_USER.name} />
          <ChevronDown
            className={cn(
              'hidden h-4 w-4 text-slate-400 transition-transform duration-150 sm:block',
              open && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </button>
      )}
    >
      {({ close }) => (
        <>
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="truncate text-sm font-medium text-slate-900">{TEMP_CURRENT_USER.name}</p>
            <p className="truncate text-xs text-slate-500">{TEMP_CURRENT_USER.email}</p>
          </div>
          <div className="p-1.5">
            <Link to="/settings" onClick={close} className={itemClasses}>
              <Settings className="h-4 w-4 text-slate-400" aria-hidden="true" />
              Account settings
            </Link>
            <button
              type="button"
              disabled
              title="Available once authentication is added"
              className={cn(itemClasses, 'cursor-not-allowed opacity-50 hover:bg-transparent')}
            >
              <LogOut className="h-4 w-4 text-slate-400" aria-hidden="true" />
              Sign out
            </button>
          </div>
        </>
      )}
    </Popover>
  );
}
