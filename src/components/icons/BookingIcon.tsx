export default function BookingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4h20c6.627 0 12 5.373 12 12 0 3.314-1.343 6.314-3.515 8.485C38.657 26.657 40 29.657 40 33c0 6.627-5.373 12-12 12H8V4zm8 6v10h12c3.314 0 6-2.686 6-6s-2.686-6-6-6H16zm0 16v10h12c3.314 0 6-2.686 6-6s-2.686-6-6-6H16z"/>
    </svg>
  );
}
