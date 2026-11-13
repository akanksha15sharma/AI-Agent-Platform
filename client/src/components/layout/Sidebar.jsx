import { Link, NavLink } from 'react-router-dom';
import { Bot, X } from 'lucide-react';
import { navItems } from '../../config/navigation';
import { TEMP_CURRENT_USER } from '../../data/temporaryData';
import Avatar from '../ui/Avatar';
import IconButton from '../ui/IconButton';
import { cn } from '../../utils/cn';

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          'fixed inset-0 z-40 bg-slate-900/40 transition-opacity duration-200 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <aside
        aria-label="Primary"
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white',
          'transition-[transform,visibility] duration-200 lg:visible lg:translate-x-0',
          open ? 'visible translate-x-0' : 'invisible -translate-x-full',
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
              <Bot className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            AI Agent Platform
          </Link>
          <IconButton label="Close navigation" onClick={onClose} className="-mr-2 lg:hidden">
            <X className="h-5 w-5" aria-hidden="true" />
          </IconButton>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navItems.map(({ label, to, icon: Icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150',
                      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
                      isActive
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={cn(
                          'h-[18px] w-[18px] transition-colors',
                          isActive ? 'text-brand-600' : 'text-slate-400 group-hover:text-slate-600',
                        )}
                        aria-hidden="true"
                      />
                      {label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-slate-200 p-3">
          <Link
            to="/settings"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg p-2 transition-colors duration-150 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            <Avatar name={TEMP_CURRENT_USER.name} />
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-slate-900">
                {TEMP_CURRENT_USER.name}
              </span>
              <span className="block truncate text-xs text-slate-500">{TEMP_CURRENT_USER.email}</span>
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
}
