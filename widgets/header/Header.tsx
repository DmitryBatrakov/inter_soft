"use client";

import Link from "next/link";
import { ThemeToggle } from "../../shared/providers/theme-provider/toggle-theme";
import { LanguageSwitcher } from "@/shared/language-switcher/language-switcher";
import { ChevronDown } from "lucide-react";
import { AnimatedButton } from "@/shared/amimated-button/animated-button";
import { useTranslations } from "next-intl";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { HiOutlineMenu } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { ServicesAccordionHome } from "@/features/services-accordion/ui/services-accordion-home";
import { useRef, useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
    const t = useTranslations("Header");
    const [servicesOpen, setServicesOpen] = useState(false);

    const router = useRouter();

    const navLinks = [
        { href: "/contact", label: t("contacts") },
        { href: "/services", label: t("services") },
        { href: "/about", label: t("about") },
    ];

    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const openServices = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setServicesOpen(true);
    };

    const closeServices = () => {
        closeTimer.current = setTimeout(() => setServicesOpen(false), 200);
    };

    return (
        <header className="flex justify-center items-center py-5 px-4 w-full fixed top-0 left-0 right-0 z-30 bg-background">
            <nav
                className="relative mx-auto hidden w-full max-w-7xl items-center justify-between md:flex"
                onMouseLeave={closeServices}
            >
                <Link
                    href="/"
                    className="text-2xl hover:scale-95 transition-scale duration-300 ease-in-out"
                >
                    Inter SOFT
                </Link>

                <ul className="flex items-center md:gap-8 lg:gap-10 text-sm">
                    <li className="hover:text-primary transition-all duration-300 ease-in-out">
                        <Link href="/contact">{t("contacts")}</Link>
                    </li>

                    <li className="relative">
                        <button
                            type="button"
                            className="flex gap-2 items-center justify-center w-full cursor-pointer"
                            aria-expanded={servicesOpen}
                            onClick={() => setServicesOpen(false)}
                            onMouseEnter={openServices}
                            onFocus={openServices}
                        >
                            <span
                                className={cn(
                                    " transition-color duration-300",
                                    servicesOpen ? "text-primary" : "",
                                )}
                                onClick={() => router.push("/services")}
                            >
                                {t("services")}
                            </span>
                            <span
                                className={cn(
                                    " transition-transform duration-300",
                                    servicesOpen
                                        ? "text-primary rotate-180"
                                        : "",
                                )}
                            >
                                <ChevronDown className="w-3 h-3 hidden lg:block" />
                            </span>
                        </button>
                    </li>

                    <li className="hover:text-primary transition-all duration-300 ease-in-out">
                        <Link href="/about">{t("about")}</Link>
                    </li>
                </ul>
                <div className="flex items-center justify-between gap-2">
                    <ThemeToggle />
                    <LanguageSwitcher />
                    <AnimatedButton>{t("link")}</AnimatedButton>
                </div>
                <div
                    onMouseEnter={openServices}
                    className={[
                        "absolute left-0 right-0 top-full mt-3",
                        "transition-all duration-200",
                        servicesOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none",
                    ].join(" ")}
                >
                    <div className="rounded-2xl w-full h-full  bg-background p-1 shadow-xl mt-3">
                        <ServicesAccordionHome
                            setServicesOpen={setServicesOpen}
                        />
                    </div>
                </div>
            </nav>
            {/*Mobile menu*/}
            <div className="md:hidden flex items-center justify-between w-full ">
                <div className="flex items-center justify-center">
                    Inter SOFT
                </div>
                <div className="flex items-center justify-center gap-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <Drawer direction="top" aria-controls="mobile-menu-drawer">
                        <DrawerTrigger>
                            <HiOutlineMenu className="w-6 h-6" />
                        </DrawerTrigger>
                        <DrawerContent
                            className="h-screen drawer-slow"
                            id="mobile-menu-drawer"
                        >
                            <DrawerHeader className="items-center">
                                <DrawerTitle>{t("menu")}</DrawerTitle>
                            </DrawerHeader>
                            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
                                {navLinks.map((linkItem, index) => (
                                    <DrawerClose asChild key={linkItem.href}>
                                        <Link
                                            href={linkItem.href}
                                            style={
                                                {
                                                    "--index": index,
                                                } as CSSProperties
                                            }
                                            className="menu-item-cascade text-3xl font-medium hover:text-primary transition-colors duration-300"
                                        >
                                            {linkItem.label}
                                        </Link>
                                    </DrawerClose>
                                ))}
                            </nav>
                            <DrawerFooter className="items-center">
                                <DrawerClose asChild>
                                    <AnimatedButton>{t("close")}</AnimatedButton>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    );
};
