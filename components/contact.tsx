"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";
import ContactForm from "./contact-form";

const ContactSection = () => {
  const t = useTranslations("contact");
  const tNav = useTranslations("nav");
  const { ref } = useSectionInView(tNav("contact"));

  const contactInfo = [
    {
      icon: Mail,
      title: t("sidebar.email"),
      value: "ajanlatkeres@szlkp.hu",
    },
    {
      icon: Phone,
      title: t("sidebar.phone"),
      value: t("sidebar.comingSoon"),
    },
    {
      icon: MapPin,
      title: t("sidebar.area"),
      value: "Szeged",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 scroll-mt-20" id="kapcsolat">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading subtitle={t("subtitle")}>{t("title")}</SectionHeading>

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-gradient-to-br from-primary to-accent p-6 md:p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">{t("sidebar.title")}</h3>
              <p className="text-white/90 text-sm md:text-base mb-6">
                {t("sidebar.description")}
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70">{item.title}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 dark:border-gray-700/40 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">
                  {t("trust.title")}
                </span>
                <br />
                {t("trust.description")}
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/40 dark:border-gray-700/40 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {t("form.title")}
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
