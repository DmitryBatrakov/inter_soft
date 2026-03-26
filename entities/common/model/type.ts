import { StaticImageData } from "next/image";


export type TechnologiesItem = {
    title: string;
    icon: string | StaticImageData;
}

export type TechnologiesData = {
    label: string;
    description: string;
    cta: string;
    items: TechnologiesItem[];
}
