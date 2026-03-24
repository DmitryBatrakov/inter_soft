import { ProjectWorkItem } from "../model/types";

export const dataWorkProcess: ProjectWorkItem = {
    title: "How We Bring Your Project to Life",
    tickerText: "Work process",
    description: [
        "We follow a clear and transparent workflow so you always understand each stage of our collaboration.",
        "At INTER SOFT, we focus on alignment, precision, and a truly individual approach to every project.",
        "We respect your time and take full responsibility for delivering results that meet your expectations.",
    ],
    steps: [
        {
            step: "01",
            title: "Initial consultation",
            description:
                "We discuss your goals, business needs, and project vision to define the right direction from the start.",
        },
        {
            step: "02",
            title: "Requirements & specification",
            description:
                "We collect all necessary inputs and prepare a detailed technical specification covering structure, functionality, and design.",
        },
        {
            step: "03",
            title: "Agreement & kickoff",
            description:
                "We finalize the terms, approve timelines, and start the project after the initial payment.",
        },
        {
            step: "04",
            title: "Development",
            description:
                "Our team builds your product with precision, providing regular updates throughout the process.",
        },
        {
            step: "05",
            title: "Testing & handover",
            description:
                "We test the product across devices and provide clear guidance so you can confidently manage it.",
        },
        {
            step: "06",
            title: "Launch",
            description:
                "We deploy the project to production and ensure a smooth and stable release.",
        },
    ],
    firstStep: {
        title: "Where Your Project Begins",
        subtitle: [
            { text: "YOUR IDEA ", variant: "default" },
            { text: "DESERVES THE ", variant: "outline" },
            {
                text: "BEST IMPLEMENTATION",
                variant: "default",
            },
            { text: "! ", variant: "outline" },
            { text: "FILL OUT THE FORM ", variant: "default" },
            { text: "AND WE WILL", variant: "outline" },
            { text: " GET BACK TO YOU.", variant: "default" },
        ],
    },
};
