// Structure only: which items exist and in what order.
// Icons live in the component (they are React components, not data).
// Text lives in messages/*.json under the "Services.items.<key>" namespace.
export const serviceItemKeys = [
    "custom-software",
    "turnkey-solutions",
    "low-code",
    "design",
] as const;

export type ServiceItemKey = (typeof serviceItemKeys)[number];
