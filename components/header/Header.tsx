import Link from "next/link";
import { ThemeToggle } from "../theme-provider/toggle-theme";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { AnimatedButton } from "@/shared/amimated-button/animated-button";
import { useTranslations } from "next-intl";

export const Header = () => {
    const t = useTranslations("Header");

    return (
        <header className="hidden md:flex justify-center items-center py-5 w-full fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-xl">
            <div className="flex justify-between items-center max-w-7xl w-full">
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
            </div>
        </header>
    );
};
