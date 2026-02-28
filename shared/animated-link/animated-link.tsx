import Link from "next/link";

type LinkProps = {
    children: React.ReactNode;
    href: string;
};

export function AnimatedLink({ children, href }: LinkProps) {
    return (
        <Link href={href} className="animated-split-btn font-(--russo-one)">
            <span>{children}</span>
        </Link>
    );
}