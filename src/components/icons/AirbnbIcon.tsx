export default function AirbnbIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 1a3.121 3.121 0 0 0-2.5 1.25l-11.25 15a3.121 3.121 0 0 0 0 3.75 3.121 3.121 0 0 0 2.5 1.25h22.5a3.121 3.121 0 0 0 2.5-1.25 3.121 3.121 0 0 0 0-3.75l-11.25-15A3.121 3.121 0 0 0 16 1zm0 3.75L25.313 18.75H6.687L16 4.75z"/>
      <circle cx="16" cy="11" r="2"/>
      <path d="M16 14c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z"/>
    </svg>
  );
}
