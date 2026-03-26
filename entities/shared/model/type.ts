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

//=========================== Industries Data ===========================

export type industriesLink = {
    label: string;
    href: string;
}

export type industriesItem = {
    title: string;
    description: string;
    link: industriesLink[];
}

export interface IndustriesData { 
    title: string;
    items: industriesItem[];
}

//=========================== Work Principles Data ===========================

export type WorkPrinciplesProps = {
    numberSection: string;
};

export interface CardData {
    title: string;
    subtitle: string;
    description: string;
}