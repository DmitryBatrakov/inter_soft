import { dataWorkProcess } from "@/entities/service/data/main-page/common";
import { AnimatedButton } from "@/shared/amimated-button/animated-button";
import { OutlinedText } from "@/shared/outlined-text/outlined-text";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";

type FirstStepServicesProps = {
    numberSection: string;
};

export const FirstStepServices = ({
    numberSection,
}: FirstStepServicesProps) => {
    const data = dataWorkProcess.firstStep;

    return (
        <section className="w-full flex flex-col items-center justify-start overflow-x-clip relative bg-foreground z-10 px-4 py-5">
            <div className="w-full flex flex-col items-center justify-between max-w-7xl text-background my-4">
                <div className="w-full flex items-center justify-between">
                    <span className="uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] leading-none max-w-xs md:max-w-full">
                        {data.title}
                    </span>
                    <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                        {numberSection}
                    </span>
                </div>
            </div>
            <div className="relative w-full flex flex-col  md:flex-row items-end justify-between max-w-7xl mt-10 md:mt-15 h-full gap-10 md:gap-0">
                <SpinningFigure
                    className="dark:border-zinc-100"
                    top="top-0 md:-top-5 lg:-top-3"
                    left="left-5 md:left-3 lg:left-8"
                    w="w-40 md:w-50 lg:w-65"
                    h="h-40 md:h-50 lg:h-65"
                    border="border-25 md:border-30 lg:border-45"
                    rounded="rounded-[40px] md:rounded-[60px] lg:rounded-[85px]"
                />
                <div className="flex flex-col items-center justify-center max-w-xs md:max-w-md lg:max-w-2xl md:ml-20 lg:ml-60 relative z-10 py-5">
                    <h1 className="text-[1.7rem] md:text-[2rem] lg:text-[3rem] uppercase text-background leading-[0.95]">
                        {data.subtitle.map((text, i) => {
                            if (text.variant === "outline") {
                                return (
                                    <OutlinedText
                                        strokeColor="gray"
                                        fillColor="transparent"
                                        strokeWidth={1.5}
                                        key={i}
                                        className="tracking-wide font-extralight"
                                    >
                                        {text.text}
                                    </OutlinedText>
                                );
                            }
                            if (text.variant === "default") {
                                return (
                                    <span
                                        key={i}
                                        className="tracking-wide font-extralight text-background"
                                    >
                                        {text.text}
                                    </span>
                                );
                            }

                            return <span key={i}>{text.text}</span>;
                        })}
                    </h1>
                </div>
                <AnimatedButton className="flex items-center justify-center gap-2 px-5 py-3 text-[1rem]">
                    Start a Project
                </AnimatedButton>
            </div>
           
        </section>
    );
};
