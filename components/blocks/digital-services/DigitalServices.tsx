"use client";

import { OurServices } from "@/shared/our-services/OurServices";
import { Ticker } from "@/shared/ticker/Ticker";

type DigitalServicesProps = {
    numberSection: string;
};

export const DigitalServices = ({ numberSection }: DigitalServicesProps) => {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-start mx-auto bg-muted-foreground px-4">
            <div className="w-full flex items-center justify-between z-10 max-w-7xl pt-4">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] text-white dark:text-secondary">
                    digital services
                </span>
                <span className=" text-black dark:text-white font-heading px-3 py-1 bg-secondary rounded-md ">
                    {numberSection}
                </span>
            </div>
            <div className="w-full">
                <Ticker text="Our servies"/>
            </div>
            <div className=" w-full max-w-7xl flex items-center justify-center">
                <OurServices />
            </div>
        </section>
    );
};
