"use client";

import { AboutTicker } from "@/shared/ticker/Ticker";

type DigitalServicesProps = {
    numberSection: string;
}

export const DigitalServices = ({ numberSection }: DigitalServicesProps) => {
    return (
        <section className="min-h-screen w-full relative z-20 ">
            <div className="w-full flex  items-center justify-between z-10">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                    digital services
                </span>
                <span className="text-accent-foreground font-heading px-3 py-1 bg-secondary rounded-md">
                    {numberSection}
                </span>
            </div>
            <div className="flex flex-col items-center justify-between w-full">
                <div>
                    <AboutTicker text="Our servies" />
                </div>
            </div>
        </section>
    );
};
