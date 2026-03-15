"use client";

import { Separator } from "@/components/ui/separator";
import { Ticker } from "@/shared/ticker/Ticker";
import { dataWorkProcess } from "@/entities/service/data/common";

export const ProjectWorkService = ({
    numberSection,
}: {
    numberSection: string;
}) => {
    return (
        <section className="w-full flex flex-col items-center justify-start min-h-screen overflow-x-clip relative px-4 py-6 bg-background mx-auto">
            <Separator />
            <div className="w-full flex items-center justify-between max-w-7xl mt-4">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                    {dataWorkProcess.title}
                </span>
                <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                    {numberSection}
                </span>
            </div>
            <div className="flex flex-col items-center justify-between w-full">
                <div className="w-full">
                    <Ticker text={dataWorkProcess.tickerText} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start max-w-full lg:max-w-7xl w-full relative">
                <div className="flex flex-col items-start justify-start lg:max-w-2xl w-full gap-3 relative z-10 text-muted-foreground ">
                    {dataWorkProcess.description.map((description) => (
                        <p
                            className="text-[1rem] md:text-[1.1rem]  font-inter font-light"
                            key={description}
                        >
                            {description}
                        </p>
                    ))}
                </div>
                <div className="w-full p-2 my-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {dataWorkProcess.steps.map((step) => (
                        <div
                            key={step.step}
                            className="group flex flex-col items-start justify-between min-h-[450px] min-w-[250px] border border-accent rounded-md p-4 hover:bg-foreground/10 transition-all duration-500"
                        >
                            <div className="w-full flex items-end justify-end">
                                <span className="group-hover:bg-primary transition-all duration-500 w-12 h-11 text-[1.4rem] p-1 rounded-md flex items-center justify-center bg-accent/40">
                                    {step.step}
                                </span>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <span className="group-hover:text-primary transition-all duration-500 text-[2rem] leading-none">
                                    {step.title}
                                </span>
                                <span
                                    className="font-inter text-[1rem] text-accent-foreground overflow-hidden max-h-0 opacity-0 transition-all ease-in duration-500 group-hover:max-h-40 group-hover:opacity-100"
                                    // style={{
                                    //     transitionTimingFunction:
                                    //         "cubic-bezier(.54,0,.52,1)",
                                    // }}
                                >
                                    {step.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
