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

export type AdvantagesAccordionItem = {
    id: string;
    title: string;
    description: string;
};
