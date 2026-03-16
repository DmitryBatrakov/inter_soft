import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type HeroBannerProps = {
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
