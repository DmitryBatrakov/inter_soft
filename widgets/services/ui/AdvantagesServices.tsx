"use client";

import { Separator } from "@/components/ui/separator";
import { AdvantagesAccordion } from "@/features/services-accordion/ui/advantages-accordion-dynamic";

export const AdvantagesServices = ({
    numberSection,
}: {
    numberSection: string;
}) => {
    return (
        <section className="w-full flex flex-col items-center justify-start overflow-x-clip relative px-4 py-6">
            <Separator />
            <div className="w-full flex items-center justify-between max-w-7xl mt-4">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                    advantages
                </span>
                <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                    {numberSection}
                </span>
            </div>
            <div className="w-full h-full max-w-xl  lg:max-w-7xl lg:mt-20 flex items-center justify-center my-10">
                <AdvantagesAccordion />
            </div>
        </section>
    );
};
