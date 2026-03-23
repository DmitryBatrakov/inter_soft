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
