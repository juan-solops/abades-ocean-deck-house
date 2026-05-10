'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import InteractiveGallery from '@/components/InteractiveGallery';
import { translations } from '@/lib/translations';
import { Analytics } from '@vercel/analytics/next';
import AirbnbIcon from '@/components/icons/AirbnbIcon';
import BookingIcon from '@/components/icons/BookingIcon';


export default function LocalePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState(locale.toUpperCase());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentLang(locale.toUpperCase());
  }, [locale]);

  // Get translations for current locale, fallback to English
  const t = translations[locale as keyof typeof translations] || translations.en;
  return (
    <div className="min-h-screen">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-volcanic-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-ocean-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🌊</span>
              </div>
              <span className="font-display font-bold text-white text-lg hidden sm:block">Abades Ocean Deck</span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link href={`/${locale}#home`} className="text-white/90 hover:text-white font-medium transition">{t.nav.home}</Link>
              <Link href={`/${locale}#about`} className="text-white/90 hover:text-white font-medium transition">{t.nav.about}</Link>
              <Link href={`/${locale}#gallery`} className="text-white/90 hover:text-white font-medium transition">{t.nav.gallery}</Link>
              <Link href={`/${locale}#things-to-do`} className="text-white/90 hover:text-white font-medium transition">{t.nav.things}</Link>
              <Link href={`/${locale}/blog`} className="text-white/90 hover:text-white font-medium transition">{t.nav.blog}</Link>
              <Link href={`/${locale}/contact`} className="text-white/90 hover:text-white font-medium transition">{t.nav.contact}</Link>
              <Link href={`/${locale}#book`} className="bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-ocean-500/30">{t.nav.book}</Link>
              
              <div className="relative group">
                <button className="flex items-center space-x-2 text-white/90 hover:text-white glass px-3 py-2 rounded-lg">
                  <span>🌐</span>
                  <span>{currentLang}</span>
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
      <Link href={`/${locale}#home`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</Link>
      <Link href={`/${locale}#about`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</Link>
      <Link href={`/${locale}#gallery`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.gallery}</Link>
      <Link href={`/${locale}#things-to-do`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.things}</Link>
      <Link href={`/${locale}/blog`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.blog}</Link>
      <Link href={`/${locale}/contact`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</Link>
      
      {/* Language Selector for Mobile */}
      <div className="pt-4 border-t border-white/10">
        <div className="text-white/60 text-sm font-semibold mb-3 uppercase tracking-wider">🌐 Language</div>
        <div className="space-y-2">
          <Link href="/en" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition rounded-lg" onClick={() => setMobileMenuOpen(false)}>
            <span className="mr-3">🇬🇧</span> English
          </Link>
          <Link href="/es" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition rounded-lg" onClick={() => setMobileMenuOpen(false)}>
            <span className="mr-3">🇪🇸</span> Español
          </Link>
          <Link href="/de" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition rounded-lg" onClick={() => setMobileMenuOpen(false)}>
            <span className="mr-3">🇩🇪</span> Deutsch
          </Link>
          <Link href="/fr" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition rounded-lg" onClick={() => setMobileMenuOpen(false)}>
            <span className="mr-3">🇫🇷</span> Français
          </Link>
          <Link href="/pl" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition rounded-lg" onClick={() => setMobileMenuOpen(false)}>
            <span className="mr-3">🇵🇱</span> Polski
          </Link>
          <Link href="/uk" className="flex items-center px-4 py-3 text-white/80 hover:bg-ocean-600/30 hover:text-white transition rounded-lg" onClick={() => setMobileMenuOpen(false)}>
            <span className="mr-3">🇺🇦</span> Українська
          </Link>
        </div>
      </div>
      
      <Link href={`/${locale}#book`} className="block bg-ocean-500 text-white text-center px-6 py-3 rounded-full font-semibold mt-4" onClick={() => setMobileMenuOpen(false)}>{t.nav.book}</Link>
    </div>
  </div>
)}

      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/house/abades-ocean-deck-house-terrace-cactus.jpg"
            alt="Ocean view from Abades, South Tenerife"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-gradient absolute inset-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-volcanic-1000/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center glass px-4 py-2 rounded-full mb-6">
              <span className="text-ocean-300 mr-2">📍</span>
              <span className="text-white/90 text-sm font-medium">{t.hero.location}</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Abades<br/>
              <span className="text-ocean-300">Ocean Deck</span><br/>
              House
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}#book`} className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-2xl shadow-ocean-500/30 text-center">
                📅 {t.hero.cta1}
              </Link>
              <Link href={`/${locale}#about`} className="glass text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition text-center">
                ▶️ {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float-animation">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS BAR */}
      <section className="bg-volcanic-900 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {t.highlights.map((item: any, idx: number) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl mb-2">{item.icon}</span>
              <span className="text-white font-semibold">{item.title}</span>
              <span className="text-white/60 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT THE HOUSE */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">{t.about.subtitle}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-volcanic-900 mt-3 mb-6">{t.about.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t.about.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {t.about.features.map((feature: any, idx: number) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center text-xl">
                      {feature.icon}
                    </div>
                    <span className="font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/house/abades-ocean-deck-house-terrace-full2.jpg"
                  alt="Abades Ocean Deck House exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-ocean-500 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm opacity-90">Guest Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
       <section id="gallery" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">{t.gallery.subtitle}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-volcanic-900 mt-3">{t.gallery.title}</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">{t.gallery.description}</p>
          </div>
          
          <InteractiveGallery />
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-wider">{t.blog.subtitle}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-volcanic-900 mt-3">{t.blog.title}</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">{t.blog.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.blog.posts.map((post: any, idx: number) => (
              <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <div className="relative h-52">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                    <div className={`absolute top-4 left-4 ${post.categoryColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      {post.category}
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-2">📅</span> {post.date}
                    <span className="mx-2">·</span>
                    <span className="mr-2">⏱️</span> {post.readTime}
                  </div>
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    <h3 className="font-display text-lg font-bold mb-2 hover:text-ocean-600 transition">{post.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href={`/${locale}/blog`} className="inline-flex items-center bg-volcanic-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-volcanic-800 transition">
              {t.blog.viewAll} <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-volcanic-900 text-center mb-16">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item: any, idx: number) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{item.text}</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center font-bold text-lg mr-3`}>
                    {item.initial}
                  </div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <p className="text-ocean-600 font-semibold mb-2 uppercase tracking-wider">{t.map.subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-volcanic-900 mb-4">{t.map.title}</h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Map */}
      <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
      <iframe
  src="https://www.google.com/maps?q=Calle+Caleton+6,+Abades,+Tenerife&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Abades Ocean Deck House Location"
></iframe>

      </div>

      {/* Location Info */}
      <div className="space-y-6">
        {/* Address Card */}
        <div className="bg-gradient-to-br from-ocean-50 to-sky-50 p-6 rounded-xl border border-ocean-200">
          <div className="flex items-start space-x-4">
            <div className="bg-ocean-500 text-white p-3 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-volcanic-900 mb-2">Abades Ocean Deck House</h3>
              <p className="text-volcanic-700 text-sm mb-4">{t.map.address}</p>
              <a
                href="https://maps.google.com/?q=Abades,Tenerife"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-ocean-600 font-semibold hover:text-ocean-700 transition"
              >
                {t.map.directions}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Nearby Places */}
        <div className="bg-white p-6 rounded-xl border border-volcanic-200 shadow-sm">
          <h3 className="font-bold text-volcanic-900 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {t.map.nearby}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-sky-100 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <span className="text-volcanic-700 font-medium">{t.map.airport}</span>
              </div>
              <span className="text-ocean-600 font-semibold">{t.map.airportTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-sand-200 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-sand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <span className="text-volcanic-700 font-medium">{t.map.beach}</span>
              </div>
              <span className="text-ocean-600 font-semibold">{t.map.beachTime}</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-ocean-500 to-ocean-600 p-4 rounded-xl text-white text-center">
            <div className="text-2xl font-bold mb-1">15'</div>
            <div className="text-xs opacity-90">✈️ Airport</div>
          </div>
          <div className="bg-gradient-to-br from-sky-500 to-sky-600 p-4 rounded-xl text-white text-center">
            <div className="text-2xl font-bold mb-1">2'</div>
            <div className="text-xs opacity-90">🏖️ Beach</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl text-white text-center">
            <div className="text-2xl font-bold mb-1">10'</div>
            <div className="text-xs opacity-90">🏛️ Ruins</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


       {/* BOOKING SECTION */}
      <section id="book" className="py-20 lg:py-28 bg-gradient-to-br from-ocean-500 to-ocean-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-ocean-100 font-semibold text-sm uppercase tracking-wider">{t.booking.subtitle}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-3 mb-6">{t.booking.title}</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">{t.booking.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer" className="bg-white px-8 py-6 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <Image src="/images/logos/airbnb.png" alt="Airbnb" width={160} height={50} className="h-14 w-auto" />
            </a>

              <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="bg-[#003580] px-8 py-6 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
               <span className="text-white text-2xl font-bold">Booking.com</span>
            </a>

          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-volcanic-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-ocean-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🌊</span>
                </div>
                <span className="font-display font-bold text-lg">Abades Ocean Deck</span>
              </div>
              <p className="text-white/60 text-sm">Your coastal retreat in South Tenerife</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href={`/${locale}#about`} className="block text-white/60 hover:text-white transition">About</Link>
                <Link href={`/${locale}#gallery`} className="block text-white/60 hover:text-white transition">Gallery</Link>
                <Link href={`/${locale}/blog`} className="block text-white/60 hover:text-white transition">Blog</Link>
                <Link href={`/${locale}/contact`} className="block text-white/60 hover:text-white transition">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-white/60">
                <p>📍 Abades, Arico</p>
                <p>South Tenerife, Spain</p>
                <p>📧 info@abadesocean.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition text-2xl">📘</a>
                <a href="#" className="text-white/60 hover:text-white transition text-2xl">📷</a>
                <a href="#" className="text-white/60 hover:text-white transition text-2xl">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 Abades Ocean Deck House. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
    
  );
}
