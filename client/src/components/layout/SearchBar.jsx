import { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '../../utils/cn';

const TYPING_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

export default function SearchBar({ className }) {
  const inputRef = useRef(null);

  // Press "/" anywhere to focus the search field.
  useEffect(() => {
    const handleKeyDown = (event) => {
      const active = document.activeElement;
      const isTyping = TYPING_TAGS.includes(active?.tagName) || active?.isContentEditable;
      if (event.key === '/' && !isTyping) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div role="search" className={cn('relative', className)}>
      <label htmlFor="global-search" className="sr-only">
        Search
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <input
        ref={inputRef}
        id="global-search"
        type="text"
        autoComplete="off"
        placeholder="Search agents and workflows"
        className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-9 text-sm placeholder:text-slate-400 transition focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-100"
      />
      <kbd className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded border border-slate-200 bg-white px-1.5 text-xs text-slate-400 md:block">
        /
      </kbd>
    </div>
  );
}
