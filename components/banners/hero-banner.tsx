import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import DotPattern from "@/shared/icons/DotPattern";

type HeroBannerProps = {
    title: string;
    subtitle?: string;
    description?: string;
    subdescription?: string;
    image?: string | StaticImageData;
    className?: string;
    variant?: "primary" | "secondary";
    icon?: ReactNode;
    children?: ReactNode;
};

export const HeroBanner = ({
    title,
    subtitle,
    description,
    subdescription,
    image,
    className,
    variant = "primary",
    icon,
    children,
}: HeroBannerProps) => {
    const variantStyles = {
        primary: "bg-primary text-muted border-primary",
        secondary: "bg-muted",
    };

    return (
        <section
            className={cn(
                "rounded-2xl p-5 w-full z-10 grid grid-cols-1 relative h-full min-h-48 overflow-hidden",
                variantStyles[variant],
                className,
            )}
        >
            <div className="max-w-3xl mx-auto text-center z-10 flex flex-col items-center justify-center">
                {icon && <div className="mb-4 flex justify-center">{icon}</div>}

                <h2 className="text-xl md:text-3xl font-semibold text-accent text-center">{title}</h2>

                {subtitle && (
                    <p className="text-muted-foreground">{subtitle}</p>
                )}

                {description && <p className="mt-4 text-muted-foreground">{description}</p>}

                {subdescription && (
                    <p className="text-muted-foreground">{subdescription}</p>
                )}

                {children && <div className="mt-6">{children}</div>}

                {image ? (
                    <div className="mt-8 flex justify-center">
                        <Image
                            src={image}
                            alt={title}
                            width={160}
                            height={160}
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div className="absolute -left-35 -top-35 md:-left-18 md:-top-26">
                <DotPattern className="text-background " size={200} dotRadius={3} />
            </div>
            <div className="absolute -right-35 -bottom-35 md:-right-18 md:-bottom-26">
                <DotPattern className="text-background" size={200} dotRadius={3} />
            </div>
        </section>
    );
};
