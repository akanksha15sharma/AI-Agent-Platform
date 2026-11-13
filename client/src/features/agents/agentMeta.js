import { Code, Database, Headset, ListChecks, Megaphone, Telescope } from 'lucide-react';

export const statusMeta = {
  active: { label: 'Active', tone: 'success' },
  paused: { label: 'Paused', tone: 'warning' },
  draft: { label: 'Draft', tone: 'neutral' },
};

export const categoryMeta = {
  support: { label: 'Customer Support', icon: Headset },
  research: { label: 'Research', icon: Telescope },
  engineering: { label: 'Engineering', icon: Code },
  marketing: { label: 'Marketing', icon: Megaphone },
  data: { label: 'Data & Analytics', icon: Database },
  productivity: { label: 'Productivity', icon: ListChecks },
};
