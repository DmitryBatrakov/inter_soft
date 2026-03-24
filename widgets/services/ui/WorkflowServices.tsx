"use client";

import { Separator } from "@/components/ui/separator";
import { ProccessData } from "@/entities/service/model/types";
import { cn } from "@/lib/utils";
import { OutlinedText } from "@/shared/outlined-text/outlined-text";
import { useEffect, useRef, useState } from "react";

type WorkflowServicesProps = {
    numberSection: string;
    proccess: ProccessData;
};

export const WorkflowServices = ({ numberSection, proccess }: WorkflowServicesProps) => {
    const workflow = proccess;
    const stepsCount = workflow.steps.length;

    const itemRefs = useRef<(HTMLElement | null)[]>([]);
    const [lastActiveIndex, setLastActiveIndex] = useState(-1);
    const [lineProgress, setLineProgress] = useState(0);

    useEffect(() => {
        let raf = 0;

        const update = () => {
            const triggerY = window.scrollY + window.innerHeight * 0.6;

            let nextIndex = -1;

            itemRefs.current.forEach((el, index) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const elTopAbs = rect.top + window.scrollY;

                if (triggerY >= elTopAbs - 15) nextIndex = index;
            });

            setLastActiveIndex(nextIndex);

            const firstEl = itemRefs.current[0];
            const lastEl = itemRefs.current[stepsCount - 1];

            if (firstEl && lastEl) {
                const firstTopAbs =
                    firstEl.getBoundingClientRect().top + window.scrollY - 5;
                const lastTopAbs =
                    lastEl.getBoundingClientRect().top + window.scrollY - 5;
                const distance = Math.max(lastTopAbs - firstTopAbs, 1);
                const rawProgress = (triggerY - firstTopAbs) / distance;
                const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

                setLineProgress(clampedProgress);
            } else {
                const fallbackProgress =
                    stepsCount > 0
                        ? Math.min(Math.max((nextIndex + 1) / stepsCount, 0), 1)
                        : 0;
                setLineProgress(fallbackProgress);
            }
        };

        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [stepsCount]);

    const easedLineProgress = Math.pow(lineProgress, 1.5);

    return (
        <section className="w-full flex flex-col items-center justify-start overflow-x-clip relative px-4 py-6 bg-background z-10">
            <Separator />
            <div className="w-full flex items-center justify-between max-w-7xl mt-4">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                    {workflow.title}
                </span>
                <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                    {numberSection}
                </span>
            </div>
            <div className="w-full max-w-7xl mt-6 md:mt-10">
                <p className="max-w-2xl text-muted-foreground text-[1rem] md:text-[1.1rem] font-inter">
                    {workflow.description}
                </p>

                <div className="relative mt-8 md:mt-12">
                    <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-accent/30 md:block"/>
                    <div
                        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-primary transition-transform duration-300 ease-out md:block"
                        style={{
                            transform: `translateX(-50%) scaleY(${easedLineProgress})`,
                            transformOrigin: "top",
                        }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {workflow.steps.map((item, index) => {
                           const isActive = index <= lastActiveIndex;
                           
                            return (
                                <article
                                    key={item.step}
                                    data-index={index}
                                    ref={(el) => {
                                        itemRefs.current[index] = el;
                                    }}
                                    className={cn(
                                        "relative rounded-md border p-4 md:p-5 min-h-[220px] flex flex-col gap-4 transition-all duration-700",
                                        index % 2 === 0
                                            ? "md:mr-4 lg:mr-8 md:mb-30"
                                            : "md:ml-4 lg:ml-8 md:mt-30",
                                        isActive
                                            ? "border-primary/60 bg-foreground/10 opacity-100"
                                            : "border-muted/40 bg-muted/10 opacity-55 grayscale",
                                    )}
                                >
                                    <div className="w-full flex flex-col items-start justify-between gap-5">
                                        <OutlinedText
                                            strokeColor="gray"
                                            fillColor="transparent"
                                            strokeWidth={1.5}
                                            className="font-extralight text-[1.7rem] tracking-widest"
                                        >
                                            STEP {item.step}
                                        </OutlinedText>
                                        <h3 className="text-[1.35rem] lg:text-[1.7rem] leading-[0.95] uppercase text-primary">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="font-inter text-[0.95rem] md:text-[1rem] text-accent-foreground">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
