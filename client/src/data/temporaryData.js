/* ---------------------------------------------------------------------------
 * TEMPORARY UI DATA — NOT REAL.
 *
 * Placeholder content used only to lay out the Step 2 dashboard. Nothing here
 * comes from the backend. Each export is prefixed with TEMP_ so it is easy to
 * find and delete when the real API replaces it.
 * ------------------------------------------------------------------------- */

export const TEMP_CURRENT_USER = {
  name: 'Alex Morgan',
  email: 'alex@example.com',
};

export const TEMP_DASHBOARD_STATS = {
  totalAgents: 12,
  activeAgents: 8,
  totalConversations: 1284,
  tasksCompleted: 3562,
};

export const TEMP_RECENT_AGENTS = [
  {
    id: 'a1',
    name: 'Support Triage',
    description:
      'Classifies incoming support tickets and drafts first responses for the team to review.',
    status: 'active',
    category: 'support',
  },
  {
    id: 'a2',
    name: 'Market Research Assistant',
    description:
      'Gathers competitor updates and summarises market signals into a weekly brief.',
    status: 'active',
    category: 'research',
  },
  {
    id: 'a3',
    name: 'Release Notes Writer',
    description:
      'Turns merged pull requests into clear, customer-ready release notes.',
    status: 'paused',
    category: 'engineering',
  },
  {
    id: 'a4',
    name: 'Campaign Copy Studio',
    description:
      'Drafts ad copy and email variations from a campaign brief.',
    status: 'draft',
    category: 'marketing',
  },
];

export const TEMP_RECENT_ACTIVITY = [
  { id: 'e1', type: 'task', agent: 'Support Triage', message: 'completed a batch of ticket classifications', time: '5 min ago' },
  { id: 'e2', type: 'conversation', agent: 'Market Research Assistant', message: 'started a new conversation', time: '32 min ago' },
  { id: 'e3', type: 'status', agent: 'Release Notes Writer', message: 'was paused', time: '2 hours ago' },
  { id: 'e4', type: 'update', agent: 'Campaign Copy Studio', message: 'instructions were edited', time: 'Yesterday' },
  { id: 'e5', type: 'task', agent: 'Market Research Assistant', message: 'finished the weekly competitor brief', time: 'Yesterday' },
  { id: 'e6', type: 'conversation', agent: 'Support Triage', message: 'started a new conversation', time: '2 days ago' },
];
