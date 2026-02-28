import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContactBannerProps = {
    title: string;
    subtitle?:string;
    description: string;
    subdescription?:string;
    image?: string | StaticImageData;
    className?: string;
    variant?: "primary" | "secondary";
    icon?: ReactNode;
    children?: ReactNode;
};

export const ContactBanner = ({
    title,
    subtitle,
    description,
    subdescription,
    image,
    className,
    variant = "primary",
    icon,
    children,
}: ContactBannerProps) => {

    const variantStyles = {
        primary: "bg-primary text-muted border-primary",
        secondary: "bg-muted",
    };

    return (
        <section
            className={cn(
                "rounded-2xl p-5 w-full z-10 grid grid-cols-1",
                variantStyles[variant],
                className,
            )}
        >
            <div className="max-w-3xl mx-auto text-center">
                
                {icon && <div className="mb-4 flex justify-center">{icon}</div>}

                <h2 className="text-3xl font-semibold">{title}</h2>

                {subtitle && <p className="text-muted-foreground">{subtitle}</p>}

                <p className="mt-4 text-muted-foreground">{description}</p>

                {subdescription && <p className="text-muted-foreground">{subdescription}</p>}   


                {children && <div className="mt-8">{children}</div>}

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
            <div className="">

            </div>  
        </section>
    );
};
