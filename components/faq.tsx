"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const faqKeys = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

export default function FAQ() {
  const t = useTranslations("faq");
  const tNav = useTranslations("nav");
  const { ref } = useSectionInView(tNav("faq"), 0.3);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Get FAQs from translations
  const faqs = faqKeys.map((key) => ({
    key,
    question: t(`questions.${key}.question`),
    answer: t(`questions.${key}.answer`),
  }));

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-16 md:py-24 scroll-mt-20" id="gyik">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading subtitle={t("subtitle")}>{t("title")}</SectionHeading>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex items-center justify-between p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/40 dark:border-gray-700/40 text-left transition-all duration-300 ${
                  openIndex === index
                    ? "shadow-lg border-primary/20"
                    : "hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      openIndex === index
                        ? "bg-gradient-to-br from-primary to-accent text-white"
                        : "bg-gradient-to-br from-primary/10 to-accent/10 text-primary"
                    }`}
                  >
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-2 ml-13 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">{t("notFound")}</p>
          <a
            href="#kapcsolat"
            className="inline-flex items-center justify-center px-8 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/40 dark:border-gray-700/40 rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            {t("contactUs")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
