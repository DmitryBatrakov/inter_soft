"use client";

import { usePathname } from "next/navigation";

const KNOWN_LOCALES = new Set(["en", "he", "ru"]);

const formatLabel = (segment: string) =>
    decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

export function useBreadcrumbs() {
    const pathname = usePathname();

    const rawSegments = pathname.split("/").filter(Boolean);
    const hasLocalePrefix = KNOWN_LOCALES.has(rawSegments[0] ?? "");
    const startIndex = hasLocalePrefix ? 1 : 0;

    const visibleSegments = rawSegments.slice(startIndex);

    const homeHref = hasLocalePrefix ? `/${rawSegments[0]}` : "/";

    return [
        { label: "Inter Soft", href: homeHref },
        ...visibleSegments.map((segment, i) => ({
            label: formatLabel(segment),
            href: "/" + rawSegments.slice(0, startIndex + i + 1).join("/"),
        })),
    ];
}
