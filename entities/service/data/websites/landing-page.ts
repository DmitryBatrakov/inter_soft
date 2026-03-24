import { ServicePageData } from "../../model/types";

export const landingPageData: ServicePageData = {
    slug: "landing-page",
    hero: {
        titlePrefix: "Creating",
        title: "Landing Pages",
        benefits: [
            "Designed to convert visitors into leads and customers",
            "Custom-built solution tailored to your business",
            "Optimized for speed, performance, and user experience",
        ],
    },
    faq: [
        {
            question: "What is a landing page?",
            answer: "A landing page is a focused one-page website designed to promote a specific offer and convert visitors into leads or customers.",
        },
        {
            question: "How much does a landing page cost?",
            answer: "Pricing depends on design and functionality. Projects typically start from $600 and may increase based on complexity and additional integrations.",
        },
        {
            question: "How long does development take?",
            answer: "On average, a landing page takes 5–10 business days depending on complexity and feedback speed.",
        },
        {
            question: "Can I edit the content myself?",
            answer: "Yes, we provide an easy-to-use admin panel (or CMS setup) so you can update content without technical knowledge.",
        },
        {
            question: "Do you include SEO optimization?",
            answer: "We provide basic SEO setup, including meta tags, performance optimization, and preparation for search engine indexing.",
        },
        {
            question: "Can you add forms and animations?",
            answer: "Yes, we integrate forms, animations, and interactive elements to improve engagement and conversions.",
        },
        {
            question: "Can I order design only?",
            answer: "Yes, we can deliver a complete design in Figma, ready for development by your team.",
        },
        {
            question: "Is the landing page mobile-friendly?",
            answer: "All our landing pages are fully responsive and optimized for mobile, tablet, and desktop devices.",
        },
    ],
    overview: {
        title: "Landing pages that drive conversions and increase sales",
        subtitle: "Why choose our landing pages?",
        description:
            "A high-converting landing page helps you capture attention, build trust, and turn visitors into paying customers. We design every element to guide users toward action — whether it's a purchase, signup, or lead request.",
    },
    proccess: {
        title: "Work process",
        description: "We follow a clear and transparent workflow so you always understand each stage of our collaboration.",
        steps: [

        {
            step: "01",
            title: "Discovery",
            description: "Understanding your goals, audience, and key message",
        },
        {
            step: "02",
            title: "Structure & Design",
            description: "Creating a clear layout and converting user flow",
        },
        {
            step: "03",
            title: "Development",
            description: "Building a fast, responsive, and SEO-friendly page",
        },
        {
            step: "04",
            title: "Launch",
            description: "Testing and publishing your landing page",
        },
    ]},
};
