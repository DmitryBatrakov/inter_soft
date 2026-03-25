export type HeroData = {
    title: string;
    titlePrefix: string;
    benefits: string[];
    cta: string;
};

export type OverviewSaas = {
    label: string;
    title: string;
    subtitle: string;
    description: string[];
};

export type ProjectsData = {
    title: string;
    subtitle: string;
    description: string[];
    cta_question: string;
    cta: string;
};

export type ProcessItem = {
    step: string;
    title: string;
    description: string;
};

export type ProcessData = {
    title: string;
    subtitle: string;
    items: ProcessItem[];
};

export type FaqItems = {
    question: string;
    answer: string;
}
export type FaqData = {
    title: string;
    items: FaqItems[];
}

export type CtaData = {
    title: string;
    subtitle:string;
    cta_question: string;
    cta: string;
}

export interface SaaPlatformData {
    hero: HeroData;
    overview: OverviewSaas;
    projects: ProjectsData;
    process: ProcessData;
    faq: FaqData;
    cta: CtaData;
}
