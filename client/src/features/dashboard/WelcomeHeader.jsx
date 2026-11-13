import ApiStatus from '../../components/ApiStatus';

export default function WelcomeHeader({ user }) {
  const firstName = user.name.split(' ')[0];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Welcome back, {firstName}</h1>
        <p className="mt-1 text-slate-600">Here&rsquo;s an overview of your agents and their recent work.</p>
      </div>
      <ApiStatus />
    </div>
  );
}
