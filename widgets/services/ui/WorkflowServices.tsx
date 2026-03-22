"use client";

import { Separator } from "@/components/ui/separator";
import { dataWorkProcess } from "@/entities/service/data/common";
import { cn } from "@/lib/utils";
import { Ticker } from "@/shared/ticker/Ticker";

type WorkflowServicesProps = {
    numberSection: string;
};

export const WorkflowServices = ({ numberSection }: WorkflowServicesProps) => {
    const workflow = dataWorkProcess.workflow;

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

            {/* <div className="w-full">
                <Ticker text={workflow.tickerText} />
            </div> */}

            <div className="w-full max-w-7xl mt-6 md:mt-10">
                <p className="max-w-2xl text-muted-foreground text-[1rem] md:text-[1.1rem] font-inter">
                    {workflow.description}
                </p>

                <div className="relative mt-8 md:mt-12">
                    <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-accent/30 md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {workflow.steps.map((item, index) => (
                            <article
                                key={item.step}
                                className={cn(
                                    "relative rounded-md border border-accent/60 bg-foreground/10 backdrop-blur-sm p-4 md:p-5 min-h-[220px] flex flex-col gap-4",
                                    index % 2 === 0 ? "md:mr-8" : "md:ml-8",
                                )}
                            >
                                <span
                                    className={cn(
                                        "absolute top-8 hidden h-3 w-3 rounded-full bg-primary md:block",
                                        index % 2 === 0
                                            ? "-right-[2.2rem]"
                                            : "-left-[2.2rem]",
                                    )}
                                />

                                <div className="w-full flex items-center justify-between">
                                    <h3 className="text-[1.35rem] lg:text-[1.7rem] leading-[0.95] uppercase text-primary">
                                        {item.title}
                                    </h3>
                                    <span className="w-11 h-10 text-[1rem] rounded-md bg-foreground/10 text-white flex items-center justify-center">
                                        {item.step}
                                    </span>
                                </div>

                                <p className="font-inter text-[0.95rem] md:text-[1rem] text-accent-foreground">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
