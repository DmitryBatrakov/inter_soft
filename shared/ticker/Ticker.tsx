import React from "react";

type Props = {
    text: string;
};

export function AboutTicker({ text }: Props) {
    const items = Array.from({ length: 6 }, () => text);

    return (
        <div className="relative w-full overflow-hidden py-6">
            {/* лёгкий градиент по краям как маска */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#0b0b0b] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#0b0b0b] to-transparent" />

            <div
                className="flex w-max animate-ticker gap-10"
                style={{ ["--ticker-duration" as string]: "40s" }}
            >
                <TickerRow items={items} />
                <TickerRow items={items} />
            </div>

            <style jsx>{`
                @keyframes ticker {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
                .animate-ticker {
                    animation: ticker var(--ticker-duration, 18s) linear
                        infinite;
                }
            `}</style>
        </div>
    );
}

function TickerRow({ items }: { items: string[] }) {
    return (
        <div className="flex items-center justify-center gap-10 uppercase">
            {items.map((t, idx) => (
                <React.Fragment key={`${t}-${idx}`}>
                    <OutlinedText>{t}</OutlinedText>

                    <span className="w-9 h-9 md:h-12 md:w-12 lg:w-15 lg:h-15 rounded-md border-2 border-primary" />
                </React.Fragment>
            ))}
        </div>
    );
}

function OutlinedText({ children }: { children: React.ReactNode }) {
    return (
        <span
            className="
        select-none
        whitespace-nowrap
        text-[3rem] leading-none md:text-[4rem] lg:text-[5.5rem]
        font-medium tracking-wide
        text-transparent
        font-heading
      "
            style={{
                WebkitTextStroke: "2px var(--ticker-stroke)",
                textShadow: "var(--ticker-shadow)",
            }}
        >
            {children}
        </span>
    );
}
