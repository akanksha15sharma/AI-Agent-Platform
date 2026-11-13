import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';

const DESKTOP_BREAKPOINT = 1024;

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // While the mobile drawer is open: lock page scroll, close on Escape,
  // and close if the window grows to desktop width.
  useEffect(() => {
    if (!sidebarOpen) return undefined;

    const close = () => setSidebarOpen(false);
    const handleKeyDown = (event) => event.key === 'Escape' && close();
    const handleResize = () => window.innerWidth >= DESKTOP_BREAKPOINT && close();

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-slate-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Skip to content
      </a>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main id="main" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
