import { getAllPosts, getAllCategories } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const locales = ['en', 'es', 'de', 'fr', 'nl', 'ru', 'pl', 'uk'];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const categoryColors: Record<string, string> = {
  'Abades': 'bg-ocean-500',
  'South Tenerife': 'bg-green-500',
  'Tenerife': 'bg-blue-500',
  'Travel Tips': 'bg-purple-500',
};

export default function BlogIndexPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const posts = getAllPosts(locale);
  const categories = getAllCategories(locale);

  const t = {
    title: 'Travel Blog',
    subtitle: 'Insider Tips & Local Guides',
    allPosts: 'All Posts',
    readMore: 'Read More',
    noPosts: 'No blog posts available yet.',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation locale={locale} />
      
      <section className="bg-gradient-to-br from-ocean-900 via-ocean-800 to-volcanic-900 py-20 lg:py-28 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-ocean-300 font-semibold text-sm uppercase tracking-wider">{t.subtitle}</span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">{t.title}</h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Discover the best of Abades, South Tenerife, and the Canary Islands through our expert guides and travel stories.
          </p>
        </div>
      </section>

      <section className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={`/${locale}/blog`} className="bg-ocean-500 text-white px-5 py-2 rounded-full font-medium text-sm">
              {t.allPosts}
            </Link>
            {categories.map((category) => (
              <Link key={category} href={`/${locale}/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium text-sm hover:bg-ocean-50 transition">
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-2xl font-display font-bold text-gray-900">{t.noPosts}</h2>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    <div className="relative h-56">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                      <div className={`absolute top-4 left-4 ${categoryColors[post.category] || 'bg-gray-500'} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                        {post.category}
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-2">📅</span>
                      {new Date(post.date).toLocaleDateString(locale)}
                      <span className="mx-2">·</span>
                      <span className="mr-2">⏱️</span>
                      {post.readTime}
                    </div>
                    <Link href={`/${locale}/blog/${post.slug}`}>
                      <h3 className="font-display text-xl font-bold mb-3 hover:text-ocean-600 transition line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
                    <Link href={`/${locale}/blog/${post.slug}`} className="inline-flex items-center text-ocean-600 hover:text-ocean-700 font-semibold text-sm">
                      {t.readMore} <span className="ml-1">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
