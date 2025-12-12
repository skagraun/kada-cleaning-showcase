import { setRequestLocale } from "next-intl/server";

import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero";
import ServiceSection from "@/components/service";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Pricing from "@/components/pricing";
import ServiceArea from "@/components/service-area";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content" className="flex flex-col items-center">
      <HeroSection />
      <ServiceSection />
      <Pricing />
      <AboutSection />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <ContactSection />
    </main>
  );
}
