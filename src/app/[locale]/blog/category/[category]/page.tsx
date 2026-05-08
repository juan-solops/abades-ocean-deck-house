import { getAllPosts, getPostsByCategory, getAllCategories } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const locales = ['en', 'es', 'de', 'fr', 'nl', 'ru', 'pl', 'uk'];

export async function generateStaticParams() {
  const params: { locale: string; category: string }[] = [];
  for (const locale of locales) {
    const categories = getAllCategories(locale);
    categories.forEach((category) => {
      params.push({ locale, category: category.toLowerCase().replace(/\s+/g, '-') });
    });
  }
  return params;
}

const categoryColors: Record<string, string> = {
  'abades': 'bg-ocean-500',
  'south-tenerife': 'bg-green-500',
  'tenerife': 'bg-blue-500',
  'travel-tips': 'bg-purple-500',
};

export default function CategoryPage({ params }: { params: { locale: string; category: string } }) {
  const { locale, category } = params;
  if (!locales.includes(locale)) notFound();

  const categoryName = category.replace(/-/g, ' ');
  const posts = getPostsByCategory(locale, categoryName);
  const allCategories = getAllCategories(locale);

  if (posts.length === 0) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation locale={locale} />
      
      <section className={`${categoryColors[category] || 'bg-ocean-500'} py-20 lg:py-28 mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">{posts[0].category}</h1>
          <p className="text-white/90 text-xl">Posts in {posts[0].category}</p>
        </div>
      </section>

      <section className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={`/${locale}/blog`} className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium text-sm hover:bg-ocean-50 transition">
              All Posts
            </Link>
            {allCategories.map((cat) => {
              const catSlug = cat.toLowerCase().replace(/\s+/g, '-');
              const isActive = catSlug === category;
              return (
                <Link key={cat} href={`/${locale}/blog/category/${catSlug}`}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition ${isActive ? 'bg-ocean-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-ocean-50'}`}>
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <div className="relative h-56">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
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
                    Read More <span className="ml-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
