import {
  Bot,
  Compass,
  LayoutDashboard,
  MessagesSquare,
  Settings,
  Workflow,
} from 'lucide-react';

export const navItems = [
  { label: 'Dashboard', to: '/', icon: LayoutDashboard, end: true },
  { label: 'My Agents', to: '/agents', icon: Bot },
  { label: 'Explore Agents', to: '/explore', icon: Compass },
  { label: 'Workflows', to: '/workflows', icon: Workflow },
  { label: 'Chat History', to: '/chat-history', icon: MessagesSquare },
  { label: 'Settings', to: '/settings', icon: Settings },
];
