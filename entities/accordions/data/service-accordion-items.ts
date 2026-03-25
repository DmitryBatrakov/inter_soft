import { ServiceItem } from "../model/types";

export const items: ServiceItem[] = [
    {
        id: "01",
        title: "Software Products",
        links: [
            { label: "SaaS Platforms", href: "/services/software-products/saas-platforms" },
            { label: "Web Applications", href: "/services/software-products/web-applications" },
            { label: "Mobile Applications", href: "/services/software-products/mobile-applications" },
        ],
        image: "/assets/images/accordion/web.png",
    },
    {
        id: "02",
        title: "Web Solutions",
        links: [
            { label: "Landing Pages", href: "/services/web-solutions/landing-page" },
            {
                label: "Corporate Websites",
                href: "/services/web-solutions/corporate-website",
            },
            { label: "Web Portals", href: "/services/web-solutions/web-portals" },
        ],
        image: "/assets/images/accordion/web.png",
    },
    {
        id: "03",
        title: "Integrations",
        links: [
            { label: "CRM Integrations", href: "/services/integrations/crm-integrations" },
            {
                label: "Payment Integrations",
                href: "/services/integrations/payment-integrations",
            },
            {
                label: "Third-Party Integrations",
                href: "/services/integrations/third-party-integrations",
            },
            { label: "Messaging Systems", href: "/services/integrations/messaging-systems" },
        ],
        image: "/assets/images/accordion/web.png",
    },
    {
        id: "04",
        title: "Business Systems",
        links: [
            { label: "Admin Panels", href: "/services/business-system/admin-panels" },
            { label: "Internal Tools", href: "/services/business-system/internal-tools" },
            { label: "Booking Systems", href: "/services/business-system/booking-systems" },
            {
                label: "Workflow Automation",
                href: "/services/business-system/workflow-automation",
            },
        ],
        image: "/assets/images/accordion/web.png",
    },
    {
        id: "05",
        title: "Product Design",
        links: [
            { label: "UX/UI Design", href: "/services/design/ux-ui-design" },
            { label: "Web Interface Design", href: "/services/design/web-design" },
            {
                label: "Application Interface Design",
                href: "/services/design/application-design",
            },
            { label: "Design Systems", href: "/services/design/design-systems" },
        ],
        image: "/assets/images/accordion/web.png",
    },
];
