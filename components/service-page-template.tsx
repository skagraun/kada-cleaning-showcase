"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Building2,
  Home,
  HardHat,
  Sparkles,
  Phone,
  ChevronRight,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Home,
  HardHat,
  Sparkles,
};

interface ServiceItem {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface OccasionItem {
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  serviceKey: "office" | "residential" | "construction" | "deep";
  icon: string;
  heroImage?: string;
}

const otherServicesInfo = [
  { key: "office", slug: "irodahaz-takaritas", icon: "Building2" },
  { key: "residential", slug: "tarsashaz-takaritas", icon: "Home" },
  { key: "construction", slug: "felujitas-utani-takaritas", icon: "HardHat" },
  { key: "deep", slug: "nagytakaritas", icon: "Sparkles" },
] as const;

export default function ServicePageTemplate({
  serviceKey,
  icon,
}: ServicePageTemplateProps) {
  const t = useTranslations("servicePages");
  const tService = useTranslations(`servicePages.${serviceKey}`);
  const tNav = useTranslations("services");

  const Icon = iconMap[icon];

  // Get service items from translations
  const serviceItems: ServiceItem[] = [];
  for (let i = 0; i < 6; i++) {
    try {
      const item = {
        title: tService(`services.items.${i}.title`),
        description: tService(`services.items.${i}.description`),
      };
      serviceItems.push(item);
    } catch {
      break;
    }
  }

  // Get process steps
  const processSteps: ProcessStep[] = [];
  for (let i = 0; i < 4; i++) {
    try {
      const step = {
        title: tService(`process.steps.${i}.title`),
        description: tService(`process.steps.${i}.description`),
      };
      processSteps.push(step);
    } catch {
      break;
    }
  }

  // Get benefits
  const benefits: string[] = [];
  for (let i = 0; i < 6; i++) {
    try {
      benefits.push(tService(`benefits.${i}`));
    } catch {
      break;
    }
  }

  // Get FAQ items
  const faqItems: FAQItem[] = [];
  for (let i = 0; i < 3; i++) {
    try {
      const item = {
        question: tService(`faq.${i}.question`),
        answer: tService(`faq.${i}.answer`),
      };
      faqItems.push(item);
    } catch {
      break;
    }
  }

  // Get occasions (only for deep cleaning)
  const occasions: OccasionItem[] = [];
  if (serviceKey === "deep") {
    for (let i = 0; i < 4; i++) {
      try {
        const item = {
          title: tService(`occasions.items.${i}.title`),
          description: tService(`occasions.items.${i}.description`),
        };
        occasions.push(item);
      } catch {
        break;
      }
    }
  }

  // Get other services (excluding current)
  const otherServices = otherServicesInfo.filter(s => s.key !== serviceKey);

  return (
    <main id="main-content" className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#szolgaltatasok"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("backToHome")}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                  {tService("hero.title")}
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl">
              {tService("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {tService("intro.title")}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {tService("intro.p1")}
              </p>
              <p className="text-lg leading-relaxed">
                {tService("intro.p2")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {tService("services.title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/40 dark:border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("whyChooseUs")}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/40 dark:bg-gray-800/40 rounded-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("process")}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section (Only for deep cleaning) */}
      {serviceKey === "deep" && occasions.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {tService("occasions.title")}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {occasions.map((occasion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-white/40 dark:border-gray-700/40"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {occasion.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {occasion.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              FAQ
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/40 dark:border-gray-700/40"
                >
                  <h3 className="font-semibold text-foreground mb-3">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t("getQuote")}
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                {tService("intro.p2").substring(0, 150)}...
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors"
                >
                  {t("getQuote")}
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+36201234567"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +36 20 123 4567
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("otherServices")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {otherServices.map((service, index) => {
              const ServiceIcon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/szolgaltatasok/${service.slug}`}
                    className="group block bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/40 dark:border-gray-700/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                        <ServiceIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {tNav(`${service.key}.title`)}
                        </h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
