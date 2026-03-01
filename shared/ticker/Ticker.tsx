import { cn } from "@/lib/utils";
import React from "react";

type Props = {
    text: string;
    className?: string;
};

export function Ticker({ text, className }: Props) {
    const items = Array.from({ length: 6 }, () => text);

    return (
        <div className=" w-full py-6 overflow-x-hidden">
            <div
                className={cn("flex w-max animate-ticker gap-10 ", className)}
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
            }}
        >
            {children}
        </span>
    );
}
