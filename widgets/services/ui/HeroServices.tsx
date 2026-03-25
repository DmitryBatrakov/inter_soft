import { HeroData } from "@/entities/service/model/web-solutions/types";
import { AnimatedButton } from "@/shared/amimated-button/animated-button";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";
import { BsCheckLg } from "react-icons/bs";


export const HeroServices = ({ data }: { data: HeroData }) => {
    return (
        <section className="w-full flex flex-col items-center justify-center min-h-screen overflow-x-clip relative mt-10 bg-background z-10">
            <div className="max-w-7xl w-full relative flex flex-col gap-10 items-center justify-start z-10 p-4 mb-20 md:mb-0">
                <h1 className="uppercase leading-none text-center ">
                    <span className="mr-2 md:mr-5 text-primary text-[2rem] md:text-[3rem] font-light lg:text-[5rem]">
                        {data.titlePrefix}
                    </span>
                    <span className="relative inline-block uppercase text-primary">
                        <span className="relative z-10 text-foreground text-[2rem] md:text-[3rem] lg:text-[5rem] font-light">
                            {data.title}
                        </span>
                        <span
                            className="absolute inset-[2px] md:inset-y-[3px] lg:inset-y-[9px]  border-2 md:border-3  border-primary rounded-md lg:rounded-xl z-0
                                        translate-x-[8px] translate-y-[6px]
                                        md:translate-x-[16px] md:translate-y-[8px]
                                        lg:translate-x-[20px] lg:translate-y-[9px]"
                            aria-hidden
                        />
                    </span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
                    {data.benefits.map((benefit) => (
                        <div
                            key={benefit}
                            className="relative z-10 flex items-center justify-around gap-4 px-2 py-4 lg:px-4 lg:py-8 bg-transparent backdrop-blur-xl rounded-xl border border-accent uppercase lg:text-[1.3rem] leading-none"
                        >
                            <span className="relative z-10  ">
                                <span
                                    className="absolute inset-0  border-2 lg:border-3  border-muted-foreground rounded-xl z-0
                                        translate-x-[8px] translate-y-[8px]
                                        lg:translate-x-[12px] lg:translate-y-[12px]
                                        "
                                    aria-hidden
                                />
                                <span className="relative z-10 bg-muted-foreground rounded-xl  p-2 w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center">
                                    <BsCheckLg className="w-5 h-5  lg:w-8 lg:h-8 text-background" />
                                </span>
                            </span>
                            <span className="w-2/3 text-[0.9rem] lg:text-[1.2rem]">{benefit}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center w-full">
                    <AnimatedButton className="px-4 py-3 lg:py-4 lg:px-6 text-[1rem] lg:text-[1.1rem]">Start a Project</AnimatedButton>
                </div>
            </div>
            <SpinningFigure
                w="w-75 md:w-115 lg:w-140"
                h="h-75 md:h-115 lg:h-140"
                border="border-45 md:border-70 lg:border-90"
                rounded="rounded-[110px] md:rounded-[170px] lg:rounded-[190px]"
            />
        </section>
    );
};
