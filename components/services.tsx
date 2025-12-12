"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Building2, Home, HardHat, Sparkles, Check, LucideIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { services } from "@/lib/data";

type ServiceProps = (typeof services)[number] & {
  slug?: string;
};

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Home,
  HardHat,
  Sparkles,
};

const slugMap: Record<string, string> = {
  "Building2": "irodahaz-takaritas",
  "Home": "tarsashaz-takaritas",
  "HardHat": "felujitas-utani-takaritas",
  "Sparkles": "nagytakaritas",
};

export default function Services({
  title,
  icon,
  description,
  features,
  infoTitle,
  infoText,
}: ServiceProps) {
  const t = useTranslations("common");
  const slug = slugMap[icon];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const Icon = iconMap[icon];

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-6 last:mb-0"
    >
      <div className="group relative max-w-[80rem] bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/40 dark:border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
        {/* Gradient accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-2xl" />

        <div className="p-6 md:p-8 pl-8 md:pl-10">
          {/* Header with icon */}
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Features list */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Info section */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <h4 className="text-sm md:text-base font-semibold text-primary mb-2">
              {infoTitle}
            </h4>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {infoText}
            </p>
          </div>

          {/* Learn more link */}
          {slug && (
            <div className="mt-6">
              <Link
                href={`/szolgaltatasok/${slug}`}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
              >
                {t("learnMore")}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
