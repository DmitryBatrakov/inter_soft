"use client";

import { Separator } from "@/components/ui/separator";
import { Ticker } from "@/shared/ticker/Ticker";

type ServiceProps = {
    numberSection: string;
};

export const Services = ({ numberSection }: ServiceProps) => {
    return (
        <section className="w-full flex flex-col items-center justify-center bg-background z-10 relative">
            <Separator />
            <div className="w-full flex items-center justify-between max-w-7xl my-4">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                    What we can offer
                </span>
                <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                    {numberSection}
                </span>
            </div>
            <div className="flex flex-col items-center justify-between w-full">
                <div className="w-full">
                    <Ticker text="Our Product" />
                </div>
            </div>
        </section>
    );
};
