"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import { useActiveSectionContext } from "@/context/active-section-context";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { id: "home", hash: "#kezdolap" },
  { id: "services", hash: "#szolgaltatasok" },
  { id: "pricing", hash: "#arak" },
  { id: "about", hash: "#rolunk" },
  { id: "testimonials", hash: "#velemenyek" },
  { id: "area", hash: "#terulet" },
  { id: "faq", hash: "#gyik" },
  { id: "contact", hash: "#kapcsolat" },
] as const;

type NavLinkId = typeof navLinks[number]["id"];

const locales = [
  { code: "hu", label: "HU", flag: "🇭🇺" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
] as const;

const Header = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const handleLinkClick = (name: string) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileMenuOpen(false);
  };

  const getTranslatedName = (id: NavLinkId): string => {
    return t(id);
  };

  return (
    <header className="z-[999] relative">
      {/* Glassmorphism navbar background */}
      <motion.div
        className="fixed top-0 left-1/2 h-16 w-full border-b border-gray-200/50 dark:border-gray-700/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/5 sm:top-4 sm:h-14 sm:w-[68rem] sm:rounded-2xl sm:border"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      <nav className="fixed top-0 left-0 right-0 h-16 flex items-center justify-center sm:top-4 sm:h-14">
        <div className="flex items-center gap-3 sm:gap-4 px-4">
          {/* Logo - only visible on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden sm:flex items-center gap-2 mr-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              KaDa
            </span>
          </motion.div>

          {/* Desktop Navigation links */}
          <ul className="hidden sm:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link, index) => {
              const name = getTranslatedName(link.id);
              return (
                <motion.li
                  className="relative"
                  key={link.hash}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <Link
                    className={cn(
                      "flex items-center justify-center px-3 py-2 rounded-xl transition-all duration-300",
                      activeSection === name
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary"
                    )}
                    href={link.hash}
                    onClick={() => handleLinkClick(name)}
                  >
                    {name}
                    {name === activeSection && (
                      <motion.span
                        className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* Language Switcher - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden sm:block relative ml-2"
          >
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{locale}</span>
            </button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-[9999]"
                >
                  {locales.map((loc) => {
                    const href = `/${loc.code}`;
                    return (
                      <a
                        key={loc.code}
                        href={href}
                        className={cn(
                          "flex items-center gap-2 w-full px-4 py-2 text-sm transition-colors cursor-pointer",
                          locale === loc.code
                            ? "bg-primary/10 text-primary"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        )}
                      >
                        <span>{loc.flag}</span>
                        <span>{loc.label}</span>
                      </a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Theme toggle - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden sm:block"
          >
            <ThemeToggle />
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[998] sm:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-[999] sm:hidden overflow-hidden"
            >
              <nav className="p-4">
                <ul className="space-y-1">
                  {navLinks.map((link, index) => {
                    const name = getTranslatedName(link.id);
                    return (
                      <motion.li
                        key={link.hash}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          className={cn(
                            "flex items-center px-4 py-3 rounded-xl transition-all duration-200",
                            activeSection === name
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          )}
                          href={link.hash}
                          onClick={() => handleLinkClick(name)}
                        >
                          {name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Language switcher - Mobile */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between px-4 mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Language
                    </span>
                  </div>
                  <div className="flex gap-2 px-4">
                    {locales.map((loc) => {
                      const href = `/${loc.code}`;
                      return (
                        <a
                          key={loc.code}
                          href={href}
                          className={cn(
                            "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors",
                            locale === loc.code
                              ? "bg-primary/10 text-primary font-medium"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          )}
                        >
                          <span>{loc.flag}</span>
                          <span>{loc.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Theme toggle - Mobile */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between px-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {t("home") === "Kezdőlap" ? "Téma váltás" : t("home") === "Startseite" ? "Theme wechseln" : "Toggle Theme"}
                  </span>
                  <ThemeToggle />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;
