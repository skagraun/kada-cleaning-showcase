"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const reviewKeys = ["1", "2", "3", "4", "5", "6"] as const;

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const tNav = useTranslations("nav");
  const { ref } = useSectionInView(tNav("testimonials"), 0.3);

  // Get testimonials from translations
  const testimonials = reviewKeys.map((key) => ({
    key,
    name: t(`reviews.${key}.name`),
    role: t(`reviews.${key}.role`),
    content: t(`reviews.${key}.content`),
    rating: 5,
  }));

  return (
    <section ref={ref} className="py-16 md:py-24 scroll-mt-20" id="velemenyek">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading subtitle={t("subtitle")}>{t("title")}</SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/40 dark:border-gray-700/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">{t("cta")}</p>
          <a
            href="#kapcsolat"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            {t("ctaButton")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
