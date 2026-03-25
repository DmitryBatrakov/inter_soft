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
};

export type WorkflowStep = {
    step: string;
    title: string;
    description: string;
};

export type WorkflowData = {
    title: string;
    tickerText: string;
    description: string;
    steps: WorkflowStep[];
};

export interface ProjectWorkItem {
    title: string;
    tickerText: string;
    description: string[];
    steps: ProjectWorkStep[];
    firstStep: FirstStep;
}
