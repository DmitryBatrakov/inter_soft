import { HeroData } from "@/entities/service/model/software-products/types";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";
import { AnimatedButton } from "@/shared/amimated-button/animated-button";

export const HeroSoftware = ({ data }: { data: HeroData }) => {
    return (
        <section className="w-full flex flex-col items-center justify-center min-h-screen overflow-x-clip relative mt-10 bg-background z-10 px-4 gap-10" >
            <div className="max-w-7xl w-full relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center md:items-start md:justify-start z-10 md:p-4 mb-20 md:mb-0">
                <h1 className="uppercase leading-none flex flex-col items-center md:items-start justify-center md:justify-start flex-1 relative z-10 md:mr-5">
                    <span className="text-foreground text-[2rem] md:text-[3rem] font-light lg:text-[5rem] relative">
                        <span className="realtive z-10">
                            {data.titlePrefix}
                        </span>
                        <span
                            className="absolute inset-[2px] md:inset-y-[3px] lg:inset-y-[9px]  border-2 md:border-3  border-primary rounded-md lg:rounded-xl -z-10
                                        translate-x-[8px] translate-y-[6px]
                                        md:translate-x-[16px] md:translate-y-[8px]
                                        lg:translate-x-[20px] lg:translate-y-[9px]"
                            aria-hidden
                        />
                    </span>
                    <span className="relative z-10 text-[2rem] md:text-[3rem] lg:text-[5rem] font-light">
                        {data.title}
                    </span>
                </h1>
                <div className="relative max-w-4xl z-10">
                    <ul className="flex flex-col gap-5 md:gap-6">
                        {data.benefits.map((benefit) => (
                            <li
                                key={benefit}
                                className="group relative p-4 backdrop-blur-xl rounded-xl border border-accent text-center"
                            >
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
                <SpinningFigure
                    top="top-1/2 -translate-y-1/2"
                    right="left-1/2 -translate-x-1/2"
                    w="w-75 md:w-115 lg:w-140"
                    h="h-75 md:h-115 lg:h-140"
                    border="border-45 md:border-70 lg:border-90"
                    rounded="rounded-[110px] md:rounded-[170px] lg:rounded-[190px]"
                />
            </div>
            <div className="flex items-center justify-center w-full relative z-10">
                <AnimatedButton className="px-4 py-3 lg:py-4 lg:px-6 text-[1rem] lg:text-[1.1rem]">
                    {data.cta}
                </AnimatedButton>
            </div>
        </section>
    );
};
