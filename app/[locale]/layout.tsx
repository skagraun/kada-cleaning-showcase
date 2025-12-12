import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import "../globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme.provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";
import CookieConsent from "@/components/cookie-consent";
import GoogleAnalytics from "@/components/google-analytics";
import { Toaster } from "@/components/ui/toaster";
import { routing } from "@/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://kadacleaning.hu";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    hu: "KaDa Cleaning - Professzionális takarítási szolgáltatások",
    en: "KaDa Cleaning - Professional Cleaning Services",
    de: "KaDa Cleaning - Professionelle Reinigungsdienstleistungen",
  };

  const descriptions: Record<string, string> = {
    hu: "Irodaházak, társasházak és építkezés utáni professzionális takarítás. Minőségi szolgáltatás, 500+ elégedett ügyfél. Kérjen ingyenes ajánlatot!",
    en: "Professional cleaning for office buildings, apartment complexes, and post-construction. Quality service, 500+ satisfied clients. Request a free quote!",
    de: "Professionelle Reinigung von Bürogebäuden, Wohnanlagen und nach Bauarbeiten. Qualitätsservice, 500+ zufriedene Kunden. Fordern Sie ein kostenloses Angebot an!",
  };

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: titles[locale] || titles.hu,
      template: "%s | KaDa Cleaning",
    },
    description: descriptions[locale] || descriptions.hu,
    keywords: [
      "cleaning",
      "office cleaning",
      "apartment cleaning",
      "post-construction cleaning",
      "professional cleaning",
      "deep cleaning",
      "stairwell cleaning",
      "KaDa Cleaning",
      "cleaning company",
    ],
    authors: [{ name: "KaDa Cleaning" }],
    creator: "KaDa Cleaning",
    openGraph: {
      type: "website",
      locale: locale === "hu" ? "hu_HU" : locale === "de" ? "de_DE" : "en_US",
      url: BASE_URL,
      siteName: "KaDa Cleaning",
      title: titles[locale] || titles.hu,
      description: descriptions[locale] || descriptions.hu,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "KaDa Cleaning - Professional Cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles.hu,
      description: descriptions[locale] || descriptions.hu,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "KaDa Cleaning",
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale === "hu" ? "" : locale}`,
      languages: {
        hu: `${BASE_URL}/`,
        en: `${BASE_URL}/en`,
        de: `${BASE_URL}/de`,
      },
    },
  };
}

const font = Montserrat({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          "bg-background text-foreground relative min-h-screen",
          font.className
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {/* Skip link for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
            >
              {locale === "hu"
                ? "Ugrás a tartalomhoz"
                : locale === "de"
                ? "Zum Inhalt springen"
                : "Skip to content"}
            </a>

            {/* Modern gradient orbs */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-[120px]" />
              <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/25 to-primary/15 blur-[100px]" />
              <div className="absolute top-[40%] left-[30%] h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px]" />
            </div>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <FloatingButtons />
            </ActiveSectionContextProvider>
            <CookieConsent />
            <GoogleAnalytics />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
