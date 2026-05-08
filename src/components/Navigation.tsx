'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation({ locale = 'en' }: { locale?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content: Record<string, any> = {
    en: { home: 'Home', about: 'The House', gallery: 'Gallery', things: 'Things To Do', blog: 'Blog', contact: 'Contact', book: 'Book Now' },
    es: { home: 'Inicio', about: 'La Casa', gallery: 'Galería', things: 'Qué Hacer', blog: 'Blog', contact: 'Contacto', book: 'Reservar' },
    de: { home: 'Startseite', about: 'Das Haus', gallery: 'Galerie', things: 'Aktivitäten', blog: 'Blog', contact: 'Kontakt', book: 'Buchen' },
    fr: { home: 'Accueil', about: 'La Maison', gallery: 'Galerie', things: 'À Faire', blog: 'Blog', contact: 'Contact', book: 'Réserver' },
    pl: { home: 'Strona Główna', about: 'Dom', gallery: 'Galeria', things: 'Co Robić', blog: 'Blog', contact: 'Kontakt', book: 'Rezerwuj' },
    uk: { home: 'Головна', about: 'Будинок', gallery: 'Галерея', things: 'Чим Зайнятися', blog: 'Блог', contact: 'Контакти', book: 'Забронювати' },
    nl: { home: 'Home', about: 'Het Huis', gallery: 'Galerij', things: 'Activiteiten', blog: 'Blog', contact: 'Contact', book: 'Boeken' }
  };

  const t = content[locale] || content.en;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-volcanic-900/95 backdrop-blur-lg shadow-2xl' : 'bg-volcanic-900/95 backdrop-blur-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-ocean-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🌊</span>
            </div>
            <span className="font-display font-bold text-white text-lg hidden sm:block">Abades Ocean Deck</span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link href={`/${locale}`} className={`text-white/90 hover:text-white font-medium transition ${pathname === `/${locale}` ? 'text-white' : ''}`}>{t.home}</Link>
            <Link href={`/${locale}#about`} className="text-white/90 hover:text-white font-medium transition">{t.about}</Link>
            <Link href={`/${locale}#gallery`} className="text-white/90 hover:text-white font-medium transition">{t.gallery}</Link>
            <Link href={`/${locale}#things-to-do`} className="text-white/90 hover:text-white font-medium transition">{t.things}</Link>
            <Link href={`/${locale}/blog`} className={`text-white/90 hover:text-white font-medium transition ${pathname?.includes('/blog') ? 'text-white' : ''}`}>{t.blog}</Link>
            <Link href={`/${locale}/contact`} className={`text-white/90 hover:text-white font-medium transition ${pathname?.includes('/contact') ? 'text-white' : ''}`}>{t.contact}</Link>
            <Link href={`/${locale}#book`} className="bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-ocean-500/30">{t.book}</Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white/90 hover:text-white glass px-3 py-2 rounded-lg">
                <span>🌐</span>
                <span className="uppercase">{locale}</span>
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-volcanic-800 rounded-xl shadow-2xl border border-white/10 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/en" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition">
                  <span className="mr-3">🇬🇧</span> English
                </Link>
                <Link href="/es" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition">
                  <span className="mr-3">🇪🇸</span> Español
                </Link>
                <Link href="/de" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition">
                  <span className="mr-3">🇩🇪</span> Deutsch
                </Link>
                <Link href="/fr" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition">
                  <span className="mr-3">🇫🇷</span> Français
                </Link>
                <Link href="/nl" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition">
                  <span className="mr-3">🇳🇱</span> Nederlands
                </Link>
                <Link href="/pl" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition">
                  <span className="mr-3">🇵🇱</span> Polski
                </Link>
                <Link href="/uk" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition">
                  <span className="mr-3">🇺🇦</span> Українська
                </Link>
              </div>
            </div>
          </div>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="lg:hidden bg-volcanic-900 border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link href={`/${locale}`} className="block text-white text-lg font-medium">{t.home}</Link>
            <Link href={`/${locale}#about`} className="block text-white text-lg font-medium">{t.about}</Link>
            <Link href={`/${locale}#gallery`} className="block text-white text-lg font-medium">{t.gallery}</Link>
            <Link href={`/${locale}#things-to-do`} className="block text-white text-lg font-medium">{t.things}</Link>
            <Link href={`/${locale}/blog`} className="block text-white text-lg font-medium">{t.blog}</Link>
            <Link href={`/${locale}/contact`} className="block text-white text-lg font-medium">{t.contact}</Link>
            <Link href={`/${locale}#book`} className="block bg-ocean-500 text-white text-center px-6 py-3 rounded-full font-semibold mt-4">{t.book}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
