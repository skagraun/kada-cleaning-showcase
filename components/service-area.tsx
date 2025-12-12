"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Districts are kept as-is since they're proper names
const serviceAreas = [
  {
    regionKey: "szeged",
    districts: ["Belváros", "Alsóváros", "Felsőváros", "Újszeged", "Móraváros", "Tarján"],
  },
  {
    regionKey: "surrounding",
    districts: ["Hódmezővásárhely", "Makó", "Szentes", "Algyő", "Deszk", "Domaszék"],
  },
];

export default function ServiceArea() {
  const t = useTranslations("serviceArea");
  const tNav = useTranslations("nav");
  const { ref } = useSectionInView(tNav("area"));

  const highlights = t.raw("highlights") as string[];

  return (
    <section ref={ref} className="py-16 md:py-24 scroll-mt-20" id="terulet">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading subtitle={t("subtitle")}>{t("title")}</SectionHeading>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-white/40"
          >
            {/* Google Maps embed - Szeged */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176632.5144814035!2d19.975662201050696!3d46.23267059674144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474487e22bcce54b%3A0x400c4290c1e1190!2sSzeged!5e0!3m2!1shu!2shu!4v1765552988445!5m2!1shu!2shu"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("title")}
              className="absolute inset-0"
            />

            {/* Overlay with gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
          </motion.div>

          {/* Areas list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/40 dark:border-gray-700/40"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {t(`regions.${area.regionKey}`)}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.districts.map((district, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-sm text-foreground rounded-full"
                      >
                        {district}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <p className="text-muted-foreground mb-4">{t("cta.description")}</p>
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                {t("cta.button")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
