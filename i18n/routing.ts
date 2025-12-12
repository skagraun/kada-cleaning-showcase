import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["hu", "en", "de"],

  // Used when no locale matches
  defaultLocale: "hu",

  // Don't use prefix for the default locale
  localePrefix: "as-needed",
});

// Lightweight wrappers around Next.js navigation APIs
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
