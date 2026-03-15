"use client";

import { Separator } from "@/components/ui/separator";

export const AdvantagesServices = ({
    numberSection,
}: {
    numberSection: string;
}) => {
    return (
        <section className="w-full flex flex-col items-center justify-center min-h-screen overflow-x-clip relative">
            <Separator />
            <div className="w-full flex items-center justify-between max-w-7xl mt-4">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                    advantages
                </span>
                <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                    {numberSection}
                </span>
            </div>
            <div>
                <h2 className="text-[2rem] font-bold">advantages</h2>
                <p className="text-[1rem]">
                    We are a team of experts who are passionate about helping our clients achieve their goals.
                </p>
            </div>
        </section>
    );
};
