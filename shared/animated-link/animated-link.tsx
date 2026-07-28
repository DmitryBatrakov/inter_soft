import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type AnimatedLinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export const AnimatedLink = ({
    href,
    children,
    className,
}: AnimatedLinkProps) => {
    return (
        <Link
            href={href}
            className={`${className} group font-inter font-medium text-[1rem] flex gap-2 items-center justify-center`}
        >
            <span className="group-hover:text-primary transition-colors duration-200">{children}</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200 group-hover:text-primary">
                <ArrowRightIcon className="w-4 h-4" />
            </span>
        </Link>
    );
};
