import { notFound } from 'next/navigation';

const locales = ['en', 'es', 'de', 'fr', 'nl', 'ru', 'pl', 'uk'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return <>{children}</>;
}
