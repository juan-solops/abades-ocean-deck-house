import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-900 via-ocean-800 to-volcanic-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white">
          <h1 className="font-display text-6xl font-bold mb-6">
            Abades Ocean Deck House
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Your private coastal retreat in South Tenerife
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/en" 
              className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              Enter Website (English)
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/en" className="glass p-6 rounded-xl hover:bg-white/20 transition">
              <div className="text-2xl mb-2">🇬🇧</div>
              <div className="font-semibold">English</div>
            </Link>
            <Link href="/es" className="glass p-6 rounded-xl hover:bg-white/20 transition">
              <div className="text-2xl mb-2">🇪🇸</div>
              <div className="font-semibold">Español</div>
            </Link>
            <Link href="/de" className="glass p-6 rounded-xl hover:bg-white/20 transition">
              <div className="text-2xl mb-2">🇩🇪</div>
              <div className="font-semibold">Deutsch</div>
            </Link>
            <Link href="/fr" className="glass p-6 rounded-xl hover:bg-white/20 transition">
              <div className="text-2xl mb-2">🇫🇷</div>
              <div className="font-semibold">Français</div>
            </Link>
          </div>
          
          <div className="mt-12 text-white/60 text-sm">
            <p>✨ Website is being built - Coming soon with full multilingual support</p>
            <p className="mt-2">🇬🇧 🇪🇸 🇩🇪 🇫🇷 🇳🇱 🇷🇺 🇵🇱 🇺🇦</p>
          </div>
        </div>
      </div>
    </div>
  );
}
