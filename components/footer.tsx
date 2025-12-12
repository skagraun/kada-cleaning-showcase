"use client";

import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";

const footerLinks = [
  { id: "home", hash: "#kezdolap" },
  { id: "services", hash: "#szolgaltatasok" },
  { id: "pricing", hash: "#arak" },
  { id: "about", hash: "#rolunk" },
  { id: "testimonials", hash: "#velemenyek" },
  { id: "area", hash: "#terulet" },
  { id: "faq", hash: "#gyik" },
  { id: "contact", hash: "#kapcsolat" },
] as const;

const Footer = () => {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">KaDa Cleaning</span>
            </div>
            <p className="text-sm text-background/70">{t("description")}</p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.hash}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {tNav(link.id)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-background/70">
              &copy; {currentYear} KaDa Cleaning
            </p>
            <p className="text-xs text-background/50 mt-1">{t("copyright")}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-xs text-background/50">
            {t("madeBy")}{" "}
            <span className="text-background/70 font-medium">SkaSoft</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
