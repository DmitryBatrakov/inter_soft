export type HeroData = {
    titlePrefix: string;
    title: string;
    benefits: string[];
};

export type FaqItem = {
    question: string;
    answer: string;
};

export type OverviewService = {
    title: string;
    subtitle: string;
    description: string;
};

export type ProccessItem = {
    step: string;
    title: string;
    description: string;
};

export type ProccessData = {
    title: string;
    description: string;
    steps: ProccessItem[];
};

export interface ServicePageData {
    slug: string;
    hero: HeroData;
    faq: FaqItem[];
    overview: OverviewService;
    proccess: ProccessData;
}
