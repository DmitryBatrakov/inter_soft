'use client'

import { usePathname } from "next/navigation";

export function useBreadcrumbs() {
    const pathname = usePathname();

    const segments = pathname.split('/').filter(Boolean);

    return segments.map((segment, i) => ({
        label: segment,
        href: '/' + segments.slice(0, i + 1).join("/"),
    }));
}