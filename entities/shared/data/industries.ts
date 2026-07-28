// Structure only: which industries exist, in what order, and each item's link
// target. Title + description text lives in messages under
// "Industries.items.<key>"; the link label reuses "Common.learnMore".
export const industryItems = [
    { key: "logistics", href: "/about" },
    { key: "booking", href: "/about" },
    { key: "fintech", href: "/about" },
    { key: "retail", href: "/about" },
    { key: "ecommerce", href: "/about" },
] as const;

export type IndustryKey = (typeof industryItems)[number]["key"];
