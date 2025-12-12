"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const planKeys = ["basic", "premium", "office"] as const;
const additionalKeys = ["window", "carpet", "deep", "construction"] as const;

export default function Pricing() {
  const t = useTranslations("pricing");
  const tNav = useTranslations("nav");
  const { ref } = useSectionInView(tNav("pricing"), 0.3);

  // Get plans from translations
  const plans = planKeys.map((key) => ({
    key,
    name: t(`plans.${key}.name`),
    description: t(`plans.${key}.description`),
    price: t(`plans.${key}.price`),
    unit: t(`plans.${key}.unit`),
    features: t.raw(`plans.${key}.features`) as string[],
    cta: t(`plans.${key}.cta`),
    isPopular: key === "premium",
  }));

  const additionalServices = additionalKeys.map((key) => ({
    name: t(`additional.${key}.name`),
    price: t(`additional.${key}.price`),
  }));

  return (
    <section ref={ref} className="py-16 md:py-24 scroll-mt-20" id="arak">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading subtitle={t("subtitle")}>{t("title")}</SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                plan.isPopular
                  ? "bg-gradient-to-br from-primary to-accent text-white border-transparent shadow-xl shadow-primary/25 scale-105 z-10"
                  : "bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/40 dark:border-gray-700/40 hover:shadow-lg"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-primary text-sm font-semibold rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  {t("popular")}
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.isPopular ? "text-white/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.isPopular ? "text-white" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.isPopular ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.isPopular ? "bg-white/20" : "bg-gradient-to-br from-primary/20 to-accent/20"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.isPopular ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${plan.isPopular ? "text-white/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#kapcsolat"
                className={`block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-white text-primary hover:shadow-lg"
                    : "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            {t("additional.title")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-white/40 dark:border-gray-700/40 text-center hover:shadow-md transition-all duration-300"
              >
                <p className="font-medium text-foreground mb-1">
                  {service.name}
                </p>
                <p className="text-sm text-primary font-semibold">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          {t("disclaimer")}
        </motion.p>
      </div>
    </section>
  );
}
