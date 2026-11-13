export default function EmptyState({ icon: Icon, title, description, children }) {
  return (
    <div className="flex flex-col items-center px-6 py-14 text-center">
      {Icon && (
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
      )}
      <h2 className="mt-4 text-base font-semibold text-slate-900">{title}</h2>
      {description && (
        <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-600">{description}</p>
      )}
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}
