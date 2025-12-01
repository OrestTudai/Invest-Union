import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import "../globals.css";
import { Footer, Header } from "@/sections";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {hasLocale} from "use-intl";
import {routing} from "@/i18n/routing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export async function generateMetadata({
 params
}: LayoutProps<'/[locale]'>): Promise<Metadata> {

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  if (locale === 'uk') {
    return {
      title: "Invest Union",
      description: 'Invest Union. Ми пропонуємо комплексні рішення – від виробництва тришарових панелей та меблевих заготовок до створення унікальних інтер’єрів із переробленої деревени',
    }
  } else {
    return {
      title: "Invest Union",
      description: 'Invest Union. We offer comprehensive solutions – from the production of three‑layer panels and furniture blanks to the creation of unique interiors from reclaimed wood',
    }
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../translations/${locale}.json`)).default;

  setRequestLocale(locale);

  return (
    <html lang={locale}>
    <head>
      <meta name="google-site-verification" content="0GdGxMr_5XQh49F0zxlTj7pUJh3aVaqmp8IxfBk5sPk" />
    </head>
    <body className={`${inter.variable} ${libreCaslon.variable} antialiased`}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer locale={locale} />
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
