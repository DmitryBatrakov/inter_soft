import { ServicePageData } from "../../model/web-solutions/types";

export const dashboardsData: ServicePageData = {
    slug: "dashboards",

    hero: {
        titlePrefix: "Creating",
        title: "Dashboards",
        benefits: [
            "Real-time insights into key metrics",
            "Custom dashboards tailored to your workflows",
            "Clear data visualization for faster decisions",
        ],
    },

    faq: [
        {
            question: "What is a business dashboard?",
            answer: "A dashboard is a centralized interface that visualizes key data from multiple sources, helping you monitor performance and make informed decisions.",
        },
        {
            question: "Can dashboards display real-time data?",
            answer: "Yes, we integrate live data sources so your dashboard updates in real time or at scheduled intervals.",
        },
        {
            question: "Can dashboards be integrated with CRM and analytics tools?",
            answer: "Yes, we integrate with CRM, ERP, analytics platforms, and custom APIs to unify your data in one place.",
        },
        {
            question: "Can different teams have their own dashboard views?",
            answer: "Yes, we implement role-based access so each team sees only the data relevant to their responsibilities.",
        },
        {
            question: "How long does dashboard development take?",
            answer: "Most projects take 3–8 weeks depending on data complexity, integrations, and visualization requirements.",
        },
        {
            question: "How much does a custom dashboard cost?",
            answer: "Pricing typically starts from $1,500 and depends on data sources, custom visualizations, and system complexity.",
        },
        {
            question: "Can dashboards include alerts and notifications?",
            answer: "Yes, we implement alerts based on thresholds, with notifications via email or messaging tools.",
        },
        {
            question: "Do you provide support and further improvements?",
            answer: "Yes, we offer ongoing support to add new metrics, improve performance, and evolve the system over time.",
        },
    ],

    overview: {
        title: "Dashboards that turn data into actionable decisions",
        subtitle: "Why choose a custom dashboard?",
        description:
            "A custom dashboard gives you full visibility into your operations, helping you track performance, identify trends, and act faster. We build systems that combine clean design with meaningful data, providing a reliable single source of truth for your team.",
    },

    proccess: {
        title: "Development process",
        description:
            "We follow a structured approach to ensure clarity, reliability, and measurable results at every stage.",
        steps: [
            {
                step: "01",
                title: "Discovery",
                description:
                    "We define KPIs, user roles, and key decision-making scenarios.",
            },
            {
                step: "02",
                title: "Data mapping",
                description:
                    "We connect and structure data sources for accurate reporting.",
            },
            {
                step: "03",
                title: "Design",
                description:
                    "We create intuitive layouts and clear data visualizations.",
            },
            {
                step: "04",
                title: "Development",
                description:
                    "We build dashboards, filters, and automation features.",
            },
            {
                step: "05",
                title: "Validation",
                description:
                    "We ensure data accuracy and test system performance.",
            },
            {
                step: "06",
                title: "Launch",
                description:
                    "We deploy the product, onboard your team, and optimize further.",
            },
        ],
    },
};