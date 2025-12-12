"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  const sections = [
    { key: "dataController", icon: Shield },
    { key: "dataCollection", icon: Database },
    { key: "purpose", icon: Eye },
    { key: "legalBasis", icon: Lock },
    { key: "retention", icon: Clock },
    { key: "rights", icon: Shield },
    { key: "cookies", icon: Database },
    { key: "contact", icon: Mail },
  ];

  return (
    <main id="main-content" className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back button */}
          <Link href="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("backToHome")}
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h1>
            <p className="text-muted-foreground">{t("lastUpdated")}: 2025.01.01</p>
          </div>

          {/* Introduction */}
          <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground">{t("intro")}</p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.section
                  key={section.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-3">
                        {t(`sections.${section.key}.title`)}
                      </h2>
                      <div className="text-muted-foreground space-y-2">
                        <p>{t(`sections.${section.key}.content`)}</p>
                        {section.key === "rights" && (
                          <ul className="list-disc list-inside space-y-1 mt-3">
                            {["access", "rectification", "erasure", "restriction", "portability", "objection"].map(
                              (right) => (
                                <li key={right}>{t(`sections.rights.list.${right}`)}</li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>{t("footerNote")}</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
