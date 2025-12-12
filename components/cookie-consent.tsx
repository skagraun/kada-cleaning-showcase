"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "kada-cleaning-cookie-consent";

export default function CookieConsent() {
  const t = useTranslations("cookie");
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
    // Notify analytics component about consent
    window.dispatchEvent(new Event("cookie-consent-change"));
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setShowBanner(false);
    // Notify analytics component about consent change
    window.dispatchEvent(new Event("cookie-consent-change"));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40 dark:border-gray-700/40 p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  {t("title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("description")}{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline"
                  >
                    {t("privacyLink")}
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-initial px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("decline")}
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-initial px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  {t("accept")}
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 md:hidden p-1 text-muted-foreground hover:text-foreground"
                aria-label={t("decline")}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
