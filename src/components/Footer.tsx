import Link from 'next/link';

export default function Footer({ locale = 'en' }: { locale?: string }) {
  return (
    <footer className="bg-volcanic-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-ocean-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🌊</span>
              </div>
              <span className="font-display font-bold text-lg">Abades Ocean Deck</span>
            </div>
            <p className="text-white/60 text-sm">Your private coastal retreat in South Tenerife</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <Link href={`/${locale}#about`} className="block hover:text-white transition">About</Link>
              <Link href={`/${locale}#gallery`} className="block hover:text-white transition">Gallery</Link>
              <Link href={`/${locale}/blog`} className="block hover:text-white transition">Blog</Link>
              <Link href={`/${locale}/contact`} className="block hover:text-white transition">Contact</Link>
              <Link href={`/${locale}#book`} className="block hover:text-white transition">Book Now</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <p>📧 info@abadesoceandeckhouse.com</p>
              <p>📞 +34 XXX XXX XXX</p>
              <p>📍 Abades, Arico, Tenerife</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">📘</a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">📷</a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">🐦</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© 2026 Abades Ocean Deck House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
