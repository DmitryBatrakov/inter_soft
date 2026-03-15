export type ServiceLink = {
    label: string;
    href: string;
};

export type ServiceItem = {
    id: string;
    title: string;
    links: ServiceLink[];
    image: string;
};

export type HeroData = {
    titlePrefix: string;
    title: string;
    benefits: string[];
};

export type FaqItem = {
    question: string;
    answer: string;
};

export interface ServicePageData {
    slug: string;
    hero: HeroData;
    faq: FaqItem[];
}
