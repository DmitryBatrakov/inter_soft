export const workPrincipleStats = [
    { key: "experience", value: "5" },
    { key: "clients", value: "40" },
    { key: "projects", value: "90" },
    { key: "retention", value: "85%" },
    { key: "team", value: "13" },
    { key: "countries", value: "7" },
] as const;

export type WorkPrincipleKey = (typeof workPrincipleStats)[number]["key"];
