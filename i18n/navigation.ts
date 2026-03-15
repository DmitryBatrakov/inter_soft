import { createNavigation } from "next-intl/navigation";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales: ["en", "he"],
    defaultLocale: "en",
  });