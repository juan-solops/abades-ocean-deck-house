import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const locales = ['en', 'es', 'de', 'fr', 'nl', 'ru', 'pl', 'uk'];

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const posts = getAllPosts(locale);
    posts.forEach((post) => {
      params.push({ locale, slug: post.slug });
    });
  }
  return params;
}

const categoryColors: Record<string, string> = {
  'Abades': 'bg-ocean-500',
  'South Tenerife': 'bg-green-500',
  'Tenerife': 'bg-blue-500',
  'Travel Tips': 'bg-purple-500',
};

export default function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  if (!locales.includes(locale)) notFound();
  
  const post = getPostBySlug(locale, slug);
  if (!post) notFound();
  
  const relatedPosts = getRelatedPosts(locale, slug, 3);

  const content: Record<string, any> = {
    en: {
      backToBlog: 'Back to Blog',
      bookingTitle: 'Ready to Experience Abades?',
      bookingSubtitle: 'Stay at Ocean Deck House',
      bookingText: 'Book your stay at Ocean Deck House and experience everything this blog post describes — just steps from your door.',
      bookingFeatures: [
        '2 minutes walk to Playa de Abades',
        'Ocean-view deck with stunning sunsets',
        'Complimentary snorkeling gear',
        'Local knowledge and recommendations'
      ],
      checkAvailability: 'Check Availability',
      contactUs: 'Contact Us',
      relatedPosts: 'Related Posts',
      readMore: 'Read More'
    },
    es: {
      backToBlog: 'Volver al Blog',
      bookingTitle: '¿Listo para Experimentar Abades?',
      bookingSubtitle: 'Alójate en Ocean Deck House',
      bookingText: 'Reserva tu estancia en Ocean Deck House y experimenta todo lo que describe este artículo, a solo unos pasos de tu puerta.',
      bookingFeatures: [
        'A 2 minutos a pie de Playa de Abades',
        'Terraza con vistas al océano y atardeceres impresionantes',
        'Equipo de snorkel de cortesía',
        'Conocimiento local y recomendaciones'
      ],
      checkAvailability: 'Consultar Disponibilidad',
      contactUs: 'Contáctanos',
      relatedPosts: 'Artículos Relacionados',
      readMore: 'Leer Más'
    },
    de: {
      backToBlog: 'Zurück zum Blog',
      bookingTitle: 'Bereit, Abades zu Erleben?',
      bookingSubtitle: 'Übernachten Sie im Ocean Deck House',
      bookingText: 'Buchen Sie Ihren Aufenthalt im Ocean Deck House und erleben Sie alles, was dieser Blogbeitrag beschreibt — nur wenige Schritte von Ihrer Tür entfernt.',
      bookingFeatures: [
        '2 Minuten zu Fuß zum Playa de Abades',
        'Terrasse mit Meerblick und atemberaubenden Sonnenuntergängen',
        'Kostenlose Schnorchelausrüstung',
        'Lokales Wissen und Empfehlungen'
      ],
      checkAvailability: 'Verfügbarkeit Prüfen',
      contactUs: 'Kontaktieren Sie Uns',
      relatedPosts: 'Verwandte Beiträge',
      readMore: 'Weiterlesen'
    },
    fr: {
      backToBlog: 'Retour au Blog',
      bookingTitle: 'Prêt à Découvrir Abades?',
      bookingSubtitle: 'Séjournez à Ocean Deck House',
      bookingText: 'Réservez votre séjour à Ocean Deck House et vivez tout ce que cet article décrit — à quelques pas de votre porte.',
      bookingFeatures: [
        '2 minutes à pied de Playa de Abades',
        'Terrasse avec vue sur l\'océan et couchers de soleil magnifiques',
        'Équipement de plongée gratuit',
        'Connaissances locales et recommandations'
      ],
      checkAvailability: 'Vérifier la Disponibilité',
      contactUs: 'Contactez-Nous',
      relatedPosts: 'Articles Connexes',
      readMore: 'Lire Plus'
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-white">
      <Navigation locale={locale} />
      
      <div className="relative h-[60vh] min-h-[500px] mt-20">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-volcanic-900/80 via-volcanic-900/40 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <Link href={`/${locale}/blog`} className="inline-flex items-center text-white/90 hover:text-white mb-6 transition">
              <span className="mr-2">←</span> {t.backToBlog}
            </Link>
            <div className={`inline-block ${categoryColors[post.category] || 'bg-gray-500'} text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4`}>
              {post.category}
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-white/80 text-sm">
              <span className="mr-2">📅</span>
              {new Date(post.date).toLocaleDateString(locale)}
              <span className="mx-3">·</span>
              <span className="mr-2">⏱️</span>
              {post.readTime}
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-ocean-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:my-6 prose-li:text-gray-700">
          <MDXRemote source={post.content} />
        </div>

        {post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Booking CTA Section */}
      <section className="py-16 bg-gradient-to-br from-ocean-800 via-ocean-900 to-volcanic-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-ocean-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-ocean-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.bookingTitle}
            </h2>
            <p className="text-ocean-200 text-xl font-semibold mb-2">{t.bookingSubtitle}</p>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t.bookingText}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
            {t.bookingFeatures.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-3 text-white/90">
                <span className="text-ocean-300 text-xl">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}#book`}
              className="inline-flex items-center justify-center bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-2xl shadow-ocean-500/30"
            >
              📅 {t.checkAvailability}
            </Link>
            <Link 
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center glass text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition"
            >
              💬 {t.contactUs}
            </Link>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-volcanic-900 mb-8">{t.relatedPosts}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <Link href={`/${locale}/blog/${relatedPost.slug}`}>
                    <div className="relative h-48">
                      <Image src={relatedPost.image} alt={relatedPost.title} fill className="object-cover" />
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link href={`/${locale}/blog/${relatedPost.slug}`}>
                      <h3 className="font-display text-lg font-bold mb-2 hover:text-ocean-600 transition line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{relatedPost.description}</p>
                    <Link href={`/${locale}/blog/${relatedPost.slug}`} className="text-ocean-600 hover:text-ocean-700 font-semibold text-sm">
                      {t.readMore} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer locale={locale} />
    </div>
  );
}
