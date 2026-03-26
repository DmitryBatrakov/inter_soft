"use client";

import { ServicesAccordionHome } from "@/features/services-accordion/ui/services-accordion-home";
import { Ticker } from "@/shared/ticker/Ticker";

type DigitalServicesProps = {
    numberSection: string;
};

export const DigitalServices = ({ numberSection }: DigitalServicesProps) => {
    return (
        <section className="w-full  flex flex-col items-center justify-start mx-auto bg-foreground px-4 pt-4  relative z-10 h-full">
            <div className="w-full flex flex-col items-center justify-between mt-4">
                <div className="w-full flex items-center justify-between max-w-7xl ">
                    <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] text-secondary">
                        inter soft services
                    </span>
                    <span className="text-black font-heading px-3 py-1 bg-secondary dark:bg-accent-foreground rounded-md ">
                        {numberSection}
                    </span>
                </div>
                <div className="w-full">
                    <Ticker
                        text="Our servies"
                        strokeColor="transparent"
                        textColor="var(--muted-foreground)"
                    />
                </div>
            </div>
            <div className=" w-full h-full max-w-7xl  flex items-center justify-center py-20">
                <ServicesAccordionHome />
            </div>
        </section>
    );
};
