"use client";

import Link from "next/link";
import { ThemeToggle } from "../../shared/providers/theme-provider/toggle-theme";
import { Button } from "@/components/ui/button";
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
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { ServicesAccordionHome } from "@/features/services-accordion/ui/services-accordion-home";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
    const t = useTranslations("Header");
    const direction = useScrollDirection(10);
    const [servicesOpen, setServicesOpen] = useState(false);

    const router = useRouter();

    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const openServices = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setServicesOpen(true);
    };

    const closeServices = () => {
        closeTimer.current = setTimeout(() => setServicesOpen(false), 500);
    };

    return (
        <header
            className={cn(
                "flex justify-center items-center py-5 px-4 w-full fixed top-0 left-0 right-0 z-20 bg-background transition-all duration-400 ease-in-out delay-100",
                direction === "down" ? " -translate-y-full" : "translate-y-0",
            )}
        >
            <nav
                className="relative mx-auto hidden w-full max-w-7xl items-center justify-between md:flex"
                onMouseLeave={closeServices}
            >
                <Link href="/" className="text-2xl hover:scale-95 transition-scale duration-300 ease-in-out">Inter SOFT</Link>

                <ul className="flex items-center md:gap-8 lg:gap-10 text-sm">
                    <li className="hover:text-primary transition-all duration-300 ease-in-out">
                        <Link href="/contact">Contacts</Link>
                    </li>

                    <li
                        className="relative"
                        onMouseEnter={openServices}
                        onFocus={openServices}
                        onClick={() => setServicesOpen(false)}
                    >
                        <button
                            type="button"
                            className="hover:text-primary transition-all duration-300"
                            aria-expanded={servicesOpen}
                            onClick={() => router.push("/services")}
                        >
                            Services
                        </button>
                    </li>

                    <li className="hover:text-primary transition-all duration-300 ease-in-out">
                        <Link href="/">Blog</Link>
                    </li>
                </ul>
                <div className="flex items-center justify-between gap-2">
                    {/* <ThemeToggle /> */}
                    <Button className="bg-transparent text-foreground hover:bg-accent">
                        en <ChevronDown className="w-4 h-4" />
                    </Button>
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
                    <div className="rounded-2xl w-full h-full border bg-background p-4 shadow-xl mt-3">
                        <ServicesAccordionHome setServicesOpen={setServicesOpen} />
                    </div>
                </div>
            </nav>
            <div className="md:hidden flex items-cemter justify-between w-full ">
                <div className="flex items-center justify-center">
                    Inter SOFT
                </div>
                <div className="flex items-center justify-center gap-2">
                    <ThemeToggle />
                    <Drawer direction="top" aria-controls="mobile-menu-drawer">
                        <DrawerTrigger>
                            <HiOutlineMenu className="w-6 h-6" />
                        </DrawerTrigger>
                        <DrawerContent className="min-h-screen drawer-slow" id="mobile-menu-drawer">
                            <DrawerHeader>
                                <DrawerTitle>Menu</DrawerTitle>
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <AnimatedButton>Close</AnimatedButton>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    );
};
