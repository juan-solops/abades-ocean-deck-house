'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Mail, Phone, MapPin, Send, Calendar, Clock } from 'lucide-react';

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const params = useParams();
  const locale = params.locale as string || 'en';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations: Record<string, any> = {
    en: {
      nav: { home: 'Home', about: 'About', gallery: 'Gallery', things: 'Things to Do', blog: 'Blog', contact: 'Contact', book: 'Book Now' },
      title: "Contact Us",
      subtitle: "We're here to assist you with your booking inquiries"
    },
    es: {
      nav: { home: 'Inicio', about: 'Sobre', gallery: 'Galería', things: 'Qué Hacer', blog: 'Blog', contact: 'Contacto', book: 'Reservar' },
      title: "Contáctenos",
      subtitle: "Estamos aquí para ayudarle con sus consultas de reserva"
    }
  };

  const t = translations[locale] || translations.en;
  const currentLang = locale.toUpperCase();

  return (
    <div className="min-h-screen bg-volcanic-950">
      {/* Navigation - Matching Main Page */}
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
              <Link href={`/${locale}#home`} className="text-white/90 hover:text-white font-medium transition">{t.nav.home}</Link>
              <Link href={`/${locale}#about`} className="text-white/90 hover:text-white font-medium transition">{t.nav.about}</Link>
              <Link href={`/${locale}#gallery`} className="text-white/90 hover:text-white font-medium transition">{t.nav.gallery}</Link>
              <Link href={`/${locale}#things-to-do`} className="text-white/90 hover:text-white font-medium transition">{t.nav.things}</Link>
              <Link href={`/${locale}/blog`} className="text-white/90 hover:text-white font-medium transition">{t.nav.blog}</Link>
              <Link href={`/${locale}/contact`} className="text-white font-medium transition border-b-2 border-ocean-400">{t.nav.contact}</Link>
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

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-volcanic-900 border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link href={`/${locale}#home`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</Link>
              <Link href={`/${locale}#about`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</Link>
              <Link href={`/${locale}#gallery`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.gallery}</Link>
              <Link href={`/${locale}#things-to-do`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.things}</Link>
              <Link href={`/${locale}/blog`} className="block text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav.blog}</Link>
              <Link href={`/${locale}/contact`} className="block text-white text-lg font-medium border-l-4 border-ocean-400 pl-4" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-80 mt-20">
        <Image
          src="/images/house/abades-ocean-deck-house-terrace-cactus.jpg"
          alt="Contact Abades Ocean House"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-volcanic-900/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <h1 className="text-5xl font-bold mb-3">{t.title}</h1>
            <p className="text-xl text-gray-300">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-ocean-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg">
            <strong>Direct Booking Advantage:</strong> Save up to 15% when you book directly with us instead of through third-party platforms
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Booking Inquiry Form</h2>
              <p className="text-gray-600 mb-8 text-lg">Please complete the form below and we will respond within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition text-gray-900"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition text-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition text-gray-900"
                    placeholder="+34 123 456 789"
                  />
                </div>

                {/* Calendar Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkin" className="block text-sm font-semibold text-gray-700 mb-2">
                      Check-in Date <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      id="checkin"
                      name="checkin"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition text-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="checkout" className="block text-sm font-semibold text-gray-700 mb-2">
                      Check-out Date <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      id="checkout"
                      name="checkout"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Guests <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition text-gray-900"
                  >
                    <option value="">Please select</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 or more Guests</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Information <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition resize-none text-gray-900"
                    placeholder="Please provide any special requests, questions about availability, or additional information that will help us serve you better..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-ocean-600 hover:bg-ocean-700 text-white py-4 px-8 rounded-md font-semibold text-lg transition flex items-center justify-center gap-3 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-ocean-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-ocean-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:info@abadesoceanhouse.com" className="text-ocean-600 hover:text-ocean-700 transition">
                      info@abadesoceanhouse.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone / WhatsApp</h4>
                    <a href="tel:+34123456789" className="text-green-600 hover:text-green-700 transition">
                      +34 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">
                      Abades, South Tenerife<br />
                      Canary Islands, Spain
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-ocean-600" />
                Office Hours
              </h3>
              
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-900">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-900">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-900">Closed</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-ocean-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-ocean-700">Response Time:</strong> We aim to respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
