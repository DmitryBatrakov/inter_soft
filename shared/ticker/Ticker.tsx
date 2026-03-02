import { cn } from "@/lib/utils";
import React from "react";

type Props = {
    text: string;
    className?: string;
    strokeColor?: string;
    shapeColor?: string; 
    textColor?: string;
};

export function Ticker({
    text,
    className,
    strokeColor = "var(--ticker-stroke)",
    shapeColor = "var(--color-primary)",
    textColor = "transparent",
}: Props) {
    const items = Array.from({ length: 6 }, () => text);

    return (
        <div className=" w-full py-6 overflow-x-hidden">
            <div
                className={cn("flex w-max animate-ticker gap-10 ", className)}
                style={{ ["--ticker-duration" as string]: "40s" }}
            >
                <TickerRow
                    items={items}
                    strokeColor={strokeColor}
                    shapeColor={shapeColor}
                    textColor={textColor}
                />
                <TickerRow
                    items={items}
                    strokeColor={strokeColor}
                    shapeColor={shapeColor}
                    textColor={textColor}
                />
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

function TickerRow({
    items,
    strokeColor,
    shapeColor,
    textColor,
}: {
    items: string[];
    strokeColor: string;
    shapeColor: string;
    textColor: string;
}) {
    return (
        <div className="flex items-center justify-center gap-10 uppercase">
            {items.map((t, idx) => (
                <React.Fragment key={`${t}-${idx}`}>
                    <OutlinedText
                        strokeColor={strokeColor}
                        textColor={textColor}
                    >
                        {t}
                    </OutlinedText>

                    <span
                        className="w-9 h-9 md:h-12 md:w-12 lg:w-15 lg:h-15 rounded-md border-2"
                        style={{ borderColor: shapeColor }}
                    />
                </React.Fragment>
            ))}
        </div>
    );
}

function OutlinedText({
    children,
    strokeColor,
    textColor,
}: {
    children: React.ReactNode;
    strokeColor: string;
    textColor: string;
}) {
    return (
        <span
            className="select-none whitespace-nowrap text-[3rem] leading-none md:text-[4rem] lg:text-[5.5rem] font-medium tracking-wide font-heading"
            style={{
                WebkitTextStroke: `2px ${strokeColor}`,
                color: textColor,
            }}
        >
            {children}
        </span>
    );
}
