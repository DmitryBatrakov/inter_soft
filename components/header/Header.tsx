import Link from "next/link";
import { ThemeToggle } from "../theme-provider/toggle-theme";
import { Button } from "../ui/button";
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
} from "../ui/drawer";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const Header = () => {
    const t = useTranslations("Header");

    return (
        <header className="flex justify-center items-center py-5 px-2 w-full fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-xl">
            <nav className="justify-between items-center max-w-7xl w-full hidden lg:flex">
                <div>
                    <p>Inter SOFT</p>
                </div>
                <nav className="flex items-center justify-center">
                    <ul className="flex items-center gap-10 text-sm">
                        <li>
                            <Link href="/">{t("services")}</Link>
                        </li>
                        <li>
                            <Link href="/">{t("contacts")}</Link>
                        </li>
                        <li>
                            <Link href="/">{t("blog")}</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center justify-between gap-2">
                    <ThemeToggle />
                    <Button className="bg-transparent text-foreground hover:bg-accent">
                        en <ChevronDown className="w-4 h-4" />
                    </Button>
                    <AnimatedButton>{t("link")}</AnimatedButton>
                </div>
            </nav>
            <div className="lg:hidden flex items-cemter justify-between w-full ">
                <div className="flex items-center justify-center">
                    Inter SOFT
                </div>
                <div className="flex items-center justify-center gap-2">
                    <ThemeToggle />
                    <Drawer direction="top">
                        <DrawerTrigger>
                            <HiOutlineMenu className="w-6 h-6" />
                        </DrawerTrigger>
                        <DrawerContent
                            className="min-h-screen drawer-slow">
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
