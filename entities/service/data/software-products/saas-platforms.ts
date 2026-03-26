import { SaaPlatformData } from "../../model/software-products/types";

export const saasPlatformsData: SaaPlatformData = {
    hero: {
        title: "SaaS Platforms",
        titlePrefix: "Engineering",
        benefits: [
            "Engineered to scale with your business — from MVP to enterprise",
            "Custom architecture aligned with your workflows and product vision",
            "Actionable insights across product, users, and revenue in real time",
        ],
        cta: "Start a Project",
    },
    overview: {
        label: "Overview",
        title: "Build scalable SaaS products",
        subtitle: "We design and develop cloud-based platforms focused on growth, performance, and long-term scalability.",
        description: [
            "A SaaS platform is a cloud-based software product that allows users to access functionality through accounts and subscriptions.",

            "It helps businesses automate processes, deliver digital services, and build recurring revenue models.",

            "Ideal for startups, service companies, and businesses launching scalable digital products.",
        ],
    },
    projects: {
        title: "Projects",
        subtitle:
            "We build SaaS platforms that are tailored to your business needs",
        description: [
            "Customer portals with role-based access",
            "Subscription-based SaaS platforms",
            "Admin dashboards with analytics",
            "Multi-user systems with permissions",
            "Internal tools for business operations",
            "Client accounts and workspaces",
        ],
        cta_question: "Sounds interesting? Let's discuss your project",
        cta: "Contact sales",
    },
    process: {
        title: "Development process",
        subtitle: "How we build your SaaS platform",
        items: [
            {
                step: "01",
                title: "Discovery",
                description: "Understanding requirements and product goals",
            },
            {
                step: "02",
                title: "Planning",
                description: "Defining system architecture and roadmap",
            },
            {
                step: "03",
                title: "UX/UI Design",
                description: "Creating intuitive user experience",
            },
            {
                step: "04",
                title: "Development",
                description: "Building scalable and secure systems",
            },
            {
                step: "05",
                title: "Integrations",
                description: "Connecting APIs, payments, and services",
            },
            {
                step: "06",
                title: "Launch",
                description: "Deployment and monitoring",
            },
        ],
    },
    faq: {
        title: "FAQ",
        items: [
            {
                question: "How long does it take to build a SaaS platform?",
                answer: "Most MVPs are delivered within 8–12 weeks, depending on complexity. We prioritize fast delivery without compromising scalability or long-term code quality.",
            },
            {
                question: "Can you build an MVP first?",
                answer: "Absolutely. We focus on launching a lean, high-quality MVP to validate your idea, gather user feedback, and iterate quickly.",
            },
            {
                question: "Can the platform scale later?",
                answer: "Yes. We design the architecture from day one to support growth, so your platform can scale without costly rewrites or technical debt.",
            },
            {
                question: "Do you develop admin panels and user roles?",
                answer: "Yes. We build fully customized admin panels, dashboards, and role-based access systems tailored to your business processes.",
            },
            {
                question: "Can you integrate subscriptions and payments?",
                answer: "Yes. We integrate secure payment systems, subscriptions, billing logic, and third-party services such as Stripe or PayPal.",
            },
            {
                question: "Can I update the system after launch?",
                answer: "Of course. We build systems that are easy to extend and maintain, and we can support you with ongoing updates and improvements.",
            },
        ],
    },
    cta: {
        label: "Contact sales",
        title: "Ready to build your SaaS platform?",
        cta_question: "Let’s discuss your idea, define the product structure, and plan the development process.",
        cta: "Contact sales",
    },
};
