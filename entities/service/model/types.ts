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
}

export type ProccessItem = {
    step: string;
    title: string;
    description: string;
}


export type ProccessData = {
    title: string;
    description: string;
    steps: ProccessItem[];
}

export interface ServicePageData {
    slug: string;
    hero: HeroData;
    faq: FaqItem[];
    overview: OverviewService;
    proccess: ProccessData;
}

export type ProjectWorkStep = {
    step: string;
    title: string;
    description: string;
};

export type TextSegment = {
    text: string;
    variant?: "default" | "outline" | "accent";
    breakAfter?: boolean;
};

export type FirstStep = {
    title: string;
    subtitle: TextSegment[];
}

export type WorkflowStep = {
    step: string;
    title: string;
    description: string;
}

export type WorkflowData = {
    title: string;
    tickerText: string;
    description: string;
    steps: WorkflowStep[];
}

export interface ProjectWorkItem {
    title: string;
    tickerText: string;
    description: string[];
    steps: ProjectWorkStep[];
    firstStep: FirstStep;
}
