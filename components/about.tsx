"use client";

import { motion } from "framer-motion";
import {
  Award,
  Leaf,
  Users,
  Clock,
  Shield,
  Headphones,
  LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Leaf,
  Award,
  Clock,
  Shield,
  Headphones,
};

const featureKeys = ["team", "eco", "quality", "flexible", "insured", "support"] as const;
const featureIcons: Record<string, string> = {
  team: "Users",
  eco: "Leaf",
  quality: "Award",
  flexible: "Clock",
  insured: "Shield",
  support: "Headphones",
};

const AboutSection = () => {
  const t = useTranslations("about");
  const tNav = useTranslations("nav");
  const { ref } = useSectionInView(tNav("about"));

  const stats = [
    { value: "2025", label: t("stats.founded") },
    { value: "10+", label: t("stats.experience") },
    { value: "Szeged", label: t("stats.area") },
    { value: "100%", label: t("stats.guarantee") },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 scroll-mt-20" id="rolunk">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading subtitle={t("subtitle")}>{t("title")}</SectionHeading>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-white/40"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
              <div className="pl-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t("mission.title")}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  <span className="font-semibold text-primary">
                    KaDa Cleaning
                  </span>{" "}
                  {t("mission.p1")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("mission.p2")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("mission.p3")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("mission.p4")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featureKeys.map((key, index) => {
              const Icon = iconMap[featureIcons[key]];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/40 dark:border-gray-700/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t(`features.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`features.${key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
