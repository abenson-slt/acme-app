export function AcmeLogo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M7 14.5c1.5-4 3-6 5-6s3.5 2 5 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-heading-4 font-bold tracking-tight">ACME</span>
    </span>
  );
}
