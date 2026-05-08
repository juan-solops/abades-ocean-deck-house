'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const content: Record<string, any> = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in Touch',
      description: 'Have questions about Ocean Deck House? Want to book directly? Send us a message and we\'ll get back to you within 24 hours.',
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number (optional)',
      checkIn: 'Check-in Date',
      checkOut: 'Check-out Date',
      guests: 'Number of Guests',
      message: 'Your Message',
      send: 'Send Message',
      success: 'Thank you! We\'ll be in touch soon.',
      contactInfo: 'Contact Information',
      location: 'Location',
      bookDirect: 'Book Direct & Save',
      bookText: 'Skip the platform fees and book directly with us for the best rates.',
      sendMessage: 'Send Us a Message',
      responseTime: 'Response Time',
      within24: 'Within 24 hours',
      features: [
        'Best price guarantee',
        'No platform fees',
        'Direct communication',
        'Flexible arrangements'
      ]
    },
    es: {
      title: 'Contáctanos',
      subtitle: 'Ponte en Contacto',
      description: '¿Tienes preguntas sobre Ocean Deck House? ¿Quieres reservar directamente? Envíanos un mensaje y te responderemos en 24 horas.',
      name: 'Tu Nombre',
      email: 'Correo Electrónico',
      phone: 'Número de Teléfono (opcional)',
      checkIn: 'Fecha de Entrada',
      checkOut: 'Fecha de Salida',
      guests: 'Número de Huéspedes',
      message: 'Tu Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Gracias! Nos pondremos en contacto pronto.',
      contactInfo: 'Información de Contacto',
      location: 'Ubicación',
      bookDirect: 'Reserva Directa y Ahorra',
      bookText: 'Evita las tarifas de plataforma y reserva directamente con nosotros para obtener las mejores tarifas.',
      sendMessage: 'Envíanos un Mensaje',
      responseTime: 'Tiempo de Respuesta',
      within24: 'En 24 horas',
      features: [
        'Garantía de mejor precio',
        'Sin tarifas de plataforma',
        'Comunicación directa',
        'Arreglos flexibles'
      ]
    },
    de: {
      title: 'Kontaktieren Sie Uns',
      subtitle: 'In Kontakt Treten',
      description: 'Haben Sie Fragen zum Ocean Deck House? Möchten Sie direkt buchen? Senden Sie uns eine Nachricht und wir melden uns innerhalb von 24 Stunden.',
      name: 'Ihr Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer (optional)',
      checkIn: 'Check-in Datum',
      checkOut: 'Check-out Datum',
      guests: 'Anzahl der Gäste',
      message: 'Ihre Nachricht',
      send: 'Nachricht Senden',
      success: 'Vielen Dank! Wir melden uns bald.',
      contactInfo: 'Kontaktinformationen',
      location: 'Standort',
      bookDirect: 'Direkt Buchen & Sparen',
      bookText: 'Überspringen Sie die Plattformgebühren und buchen Sie direkt bei uns für die besten Preise.',
      sendMessage: 'Senden Sie Uns eine Nachricht',
      responseTime: 'Antwortzeit',
      within24: 'Innerhalb von 24 Stunden',
      features: [
        'Bestpreisgarantie',
        'Keine Plattformgebühren',
        'Direkte Kommunikation',
        'Flexible Vereinbarungen'
      ]
    },
    fr: {
      title: 'Contactez-Nous',
      subtitle: 'Prenez Contact',
      description: 'Vous avez des questions sur Ocean Deck House? Vous voulez réserver directement? Envoyez-nous un message et nous vous répondrons dans les 24 heures.',
      name: 'Votre Nom',
      email: 'Adresse E-mail',
      phone: 'Numéro de Téléphone (optionnel)',
      checkIn: 'Date d\'Arrivée',
      checkOut: 'Date de Départ',
      guests: 'Nombre d\'Invités',
      message: 'Votre Message',
      send: 'Envoyer le Message',
      success: 'Merci! Nous vous contacterons bientôt.',
      contactInfo: 'Informations de Contact',
      location: 'Emplacement',
      bookDirect: 'Réservez Directement et Économisez',
      bookText: 'Évitez les frais de plateforme et réservez directement avec nous pour les meilleurs tarifs.',
      sendMessage: 'Envoyez-Nous un Message',
      responseTime: 'Temps de Réponse',
      within24: 'Dans les 24 heures',
      features: [
        'Garantie du meilleur prix',
        'Pas de frais de plateforme',
        'Communication directe',
        'Arrangements flexibles'
      ]
    },
      pl: {
    title: 'Kontakt',
    subtitle: 'Skontaktuj się z nami',
    description: 'Masz pytania dotyczące Ocean Deck House? Chcesz zarezerwować bezpośrednio? Wyślij nam wiadomość.',
    name: 'Twoje Imię',
    email: 'Adres Email',
    phone: 'Numer Telefonu',
    checkIn: 'Data Przyjazdu',
    checkOut: 'Data Wyjazdu',
    guests: 'Liczba Gości',
    message: 'Twoja Wiadomość',
    send: 'Wyślij Wiadomość',
    success: 'Dziękujemy! Wkrótce się odezwiemy.',
    contactInfo: 'Informacje Kontaktowe',
    location: 'Lokalizacja',
    bookDirect: 'Zarezerwuj Bezpośrednio i Oszczędzaj',
    bookText: 'Unikaj opłat platformowych i rezerwuj bezpośrednio u nas za najlepszymi cenami.',
    sendMessage: 'Wyślij nam wiadomość',
    responseTime: 'Czas odpowiedzi',
    within24: 'W ciągu 24 godzin',
    features: ['Gwarancja najlepszej ceny', 'Brak opłat platformowych', 'Bezpośrednia komunikacja', 'Elastyczne warunki']
  },
  uk: {
    title: 'Контакти',
    subtitle: 'Зв\'яжіться з нами',
    description: 'Маєте питання щодо Ocean Deck House? Хочете забронювати напряму? Надішліть нам повідомлення.',
    name: 'Ваше Ім\'я',
    email: 'Електронна адреса',
    phone: 'Номер телефону',
    checkIn: 'Дата заїзду',
    checkOut: 'Дата виїзду',
    guests: 'Кількість гостей',
    message: 'Ваше повідомлення',
    send: 'Надіслати',
    success: 'Дякуємо! Ми скоро зв\'яжемося з вами.',
    contactInfo: 'Контактна інформація',
    location: 'Розташування',
    bookDirect: 'Бронюйте напряму та заощаджуйте',
    bookText: 'Уникайте комісій платформ та бронюйте напряму у нас за найкращими цінами.',
    sendMessage: 'Надішліть нам повідомлення',
    responseTime: 'Час відповіді',
    within24: 'Протягом 24 годин',
    features: ['Гарантія найкращої ціни', 'Без комісій платформ', 'Пряме спілкування', 'Гнучкі умови']
  }
};

  

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation locale={locale} />
      
      <section className="bg-gradient-to-br from-ocean-900 via-ocean-800 to-volcanic-900 py-20 lg:py-28 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-ocean-300 font-semibold text-sm uppercase tracking-wider">{t.subtitle}</span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">{t.title}</h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">{t.description}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h2 className="font-display text-3xl font-bold text-volcanic-900 mb-8">{t.sendMessage}</h2>
              
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6">
                  ✅ {t.success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.name} *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.email} *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.checkIn}</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.checkOut}</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.guests}</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.message} *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-ocean-500 hover:bg-ocean-600 text-white font-semibold py-4 rounded-full transition shadow-lg"
                >
                  {t.send}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-8">
                <h2 className="font-display text-3xl font-bold text-volcanic-900 mb-8">{t.contactInfo}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@abadesoceandeckhouse.com" className="text-ocean-600 hover:text-ocean-700">
                        info@abadesoceandeckhouse.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+34XXXXXXXXX" className="text-ocean-600 hover:text-ocean-700">
                        +34 XXX XXX XXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.location}</h3>
                      <p className="text-gray-600">
                        Abades, Arico<br />
                        South Tenerife<br />
                        Canary Islands, Spain
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.responseTime}</h3>
                      <p className="text-gray-600">{t.within24}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-2xl shadow-xl p-8 lg:p-12 text-white">
                <h3 className="font-display text-2xl font-bold mb-4">{t.bookDirect}</h3>
                <p className="text-white/90 mb-6">{t.bookText}</p>
                <ul className="space-y-3 mb-6">
                  {t.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-3">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
