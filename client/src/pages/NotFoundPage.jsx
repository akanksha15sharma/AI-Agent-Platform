import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-slate-600">
        The page you requested doesn&rsquo;t exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      >
        Go to home
      </Link>
    </section>
  );
}
