import { createBrowserRouter } from 'react-router-dom';
import { Bot, Compass, MessagesSquare, PencilLine, Plus, Settings, Workflow } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import PlaceholderPage from '../pages/PlaceholderPage';

const planned = (title, icon, description) => (
  <PlaceholderPage title={title} icon={icon} description={description} />
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'agents', element: planned('My Agents', Bot, 'Your agents will be listed and managed here in an upcoming step.') },
      { path: 'agents/new', element: planned('Create agent', Plus, 'The agent builder is planned for an upcoming step.') },
      { path: 'agents/:agentId', element: planned('Agent details', Bot, 'Agent details are planned for an upcoming step.') },
      { path: 'agents/:agentId/edit', element: planned('Edit agent', PencilLine, 'The agent editor is planned for an upcoming step.') },
      { path: 'explore', element: planned('Explore Agents', Compass, 'Discovering shared agents is planned for an upcoming step.') },
      { path: 'workflows', element: planned('Workflows', Workflow, 'Workflows are planned for an upcoming step.') },
      { path: 'chat-history', element: planned('Chat History', MessagesSquare, 'Past conversations are planned for an upcoming step.') },
      { path: 'settings', element: planned('Settings', Settings, 'Account and workspace settings are planned for an upcoming step.') },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
