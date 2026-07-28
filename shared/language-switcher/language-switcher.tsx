"use client";

import { useLocale } from "next-intl";
import { ChevronDown, Check } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<Locale, { short: string; label: string }> = {
    en: { short: "EN", label: "English" },
    ru: { short: "RU", label: "Русский" },
    he: { short: "עב", label: "עברית" },
};

export const LanguageSwitcher = ({ className }: { className?: string }) => {
    const locale = useLocale() as Locale;
    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        const onPointerDown = (event: MouseEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };

        document.addEventListener("mousedown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("mousedown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    const changeLocale = (next: Locale) => {
        setOpen(false);
        if (next === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: next });
        });
    };

    return (
        <div ref={rootRef} className={cn("relative", className)}>
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                disabled={isPending}
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-1.5 rounded-md px-3 h-9 text-sm cursor-pointer text-foreground border border-transparent hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50"
            >
                {LOCALE_LABELS[locale].short}
                <ChevronDown
                    className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        open ? "rotate-180 text-primary" : "",
                    )}
                />
            </button>

            <ul
                role="listbox"
                className={cn(
                    "absolute right-0 top-full mt-2 min-w-20 rounded-xl border border-border bg-background p-1 shadow-xl z-40 origin-top-right transition-all duration-200",
                    open
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-1 pointer-events-none",
                )}
            >
                {routing.locales.map((code) => {
                    const active = code === locale;
                    return (
                        <li key={code} role="option" aria-selected={active}>
                            <button
                                type="button"
                                onClick={() => changeLocale(code)}
                                className={cn(
                                    "flex items-center justify-between w-full gap-3 my-1 rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors",
                                    active
                                        ? "bg-accent text-primary"
                                        : "hover:bg-accent hover:text-accent-foreground",
                                )}
                            >
                                <span>{LOCALE_LABELS[code].label}</span>
                                <Check
                                    className={cn(
                                        "w-4 h-4 transition-opacity",
                                        active ? "opacity-100" : "opacity-0",
                                    )}
                                />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
