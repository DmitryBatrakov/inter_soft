"use client";

import { advantageAccordionItems } from "@/entities/service/data/advantages-accodion-item";
import { cn } from "@/lib/utils";
import { OutlinedText } from "@/shared/outlined-text/outlined-text";
import { useState } from "react";

export const AdvantagesAccordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="flex flex-col lg:flex-row w-full h-[700px] lg:h-[550px] gap-2">
            {advantageAccordionItems.map((item, i) => {
                const active = i === activeIndex;

                return (
                    <article
                        key={item.id}
                        onFocus={() => setActiveIndex(i)}
                        onMouseEnter={() => setActiveIndex(i)}
                        // onTouchStart={(e) => {
                        //     e.preventDefault();
                        //     setActiveIndex(i);
                        // }}
                        tabIndex={0}
                        className={cn(
                            "relative rounded-lg h-full bg-transparent transition-height duration-300 md:duration-700 ease-out overflow-hidden border border-primary",
                            active
                                ? "flex-7 lg:flex-4 max-h-[600px] lg:max-h-full"
                                : "flex-2 lg:flex-1 max-h-[70px] lg:max-h-full border-accent",
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 h-full p-6 flex flex-col gap-5 justify-center text-white transition-all duration-500 ease-out leading-none",
                                active
                                    ? "opacity-90"
                                    : "opacity-0 pointer-events-none",
                            )}
                        >
                            <div className="flex-1 flex flex-col gap-5 justify-center">
                                <h2
                                    className={cn(
                                        "text-[1.5rem] uppercase transition-transform duration-700 ease-in-out max-w-[400px]",
                                        active
                                            ? "opacity-100 translate-x-0 scale-100 delay-150"
                                            : "opacity-0 -translate-x-100 scale-60",
                                    )}
                                >
                                    {item.title}
                                </h2>
                                <span
                                    className={cn(
                                        "text-[1rem] transition-transform duration-700 ease-in-out font-inter max-w-[400px]",
                                        active
                                            ? "opacity-100 translate-x-0 scale-100 delay-300"
                                            : "opacity-0 -translate-x-100 scale-70",
                                    )}
                                >
                                    {item.description}
                                </span>
                            </div>

                            <span
                                className={cn(
                                    "text-[2.1rem] font-bold text-primary transition-transform duration-700 ease-in-out p-2 justify-end",
                                    active
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 translate-x-20",
                                )}
                            >
                                {item.id}
                            </span>
                        </div>
                        <div
                            className={cn(
                                "flex flex-col h-full items-center justify-center lg:justify-end p-1 lg:p-6 transition-all duration-500 ease-out",
                                active
                                    ? "opacity-0"
                                    : "opacity-100 pointer-events-none",
                            )}
                        >
                            <OutlinedText
                                strokeColor="var(--muted-foreground)"
                                fillColor="transparent"
                                strokeWidth={0.5}
                                className={cn(
                                    "text-[2rem] tracking-widest font-bold text-white opacity-50 transition-all duration-100 ease-out flex items-center justify-center",
                                    active ? "opacity-0" : "opacity-100",
                                )}
                            >
                                {item.id}
                            </OutlinedText>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};
