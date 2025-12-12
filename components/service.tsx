"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";
import Services from "./services";

const serviceKeys = ["office", "residential", "construction", "deep"] as const;

const iconMap: Record<string, string> = {
  office: "Building2",
  residential: "Home",
  construction: "HardHat",
  deep: "Sparkles",
};

const ServiceSection = () => {
  const t = useTranslations("services");
  const tNav = useTranslations("nav");
  const { ref } = useSectionInView(tNav("services"), 0.1);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 scroll-mt-20"
      id="szolgaltatasok"
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading subtitle={t("subtitle")}>{t("title")}</SectionHeading>
        <div className="mt-12 space-y-6">
          {serviceKeys.map((key) => (
            <Services
              key={key}
              title={t(`${key}.title`)}
              icon={iconMap[key]}
              description={t(`${key}.description`)}
              features={t.raw(`${key}.features`) as string[]}
              infoTitle={t(`${key}.infoTitle`)}
              infoText={t(`${key}.infoText`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
