"use client";

import { AboutTicker } from "@/shared/ticker/Ticker";

type DigitalServicesProps = {
    numberSection: string;
}

export const DigitalServices = ({ numberSection }: DigitalServicesProps) => {
    return (
        <section className="relative w-full min-h-[180vh] z-50">
            <div className="sticky top-0 h-screen w-full isolate overflow-hidden">
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen -z-10 bg-foreground" />
                <div className="w-full flex items-center justify-between z-10">
                    <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                        digital services
                    </span>
                    <span className="text-accent-foreground font-heading px-3 py-1 bg-secondary rounded-md">
                        {numberSection}
                    </span>
                </div>
                <div className="flex flex-col items-center justify-between w-full">
                    <div className="w-full">
                        <AboutTicker text="Our servies" />
                    </div>
                </div>
            </div>
        </section>
    );
};
