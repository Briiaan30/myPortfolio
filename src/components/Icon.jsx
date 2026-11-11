const paths = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  diagonal: <path d="M6 18 18 6M6 6h12v12" />,
  down: <path d="M12 4v16m-6-6 6 6 6-6" />,
  whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8a8.5 8.5 0 1 1 16.2-4Z" /><path d="m8.1 7.4 1.3 2-1 1.2a9 9 0 0 0 3.9 3.9l1.2-1 2 1.3-.5 1.8c-.2.6-.9.8-1.5.7-4.3-.7-7.8-4.2-8.5-8.5-.1-.6.1-1.3.7-1.5l1.8-.5Z" transform="translate(1 0) scale(.9)" /></>,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3m6 0h4" /></>,
  branch: <><circle cx="7" cy="5" r="2" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="6" r="2" /><path d="M7 7v10m0-4h4a6 6 0 0 0 6-6" /></>,
  code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />,
  linkedin: <><path d="M5 9v11M5 4v.5M10 20V9h4v2a4 4 0 0 1 7 3v6m-7 0v-6" /></>,
  github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7.3A5.7 5.7 0 0 0 19.3 4 5.3 5.3 0 0 0 19.2 1s-1.2 0-4.2 1.5a13.4 13.4 0 0 0-7 0C5 1 3.8 1 3.8 1A5.3 5.3 0 0 0 3.7 4a5.7 5.7 0 0 0-1.5 4c0 5.7 3.5 6.9 6.8 7.3A3.5 3.5 0 0 0 8 18v4" /></>,
};

export default function Icon({ name, size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      {paths[name] || paths.arrow}
    </svg>
  );
}
