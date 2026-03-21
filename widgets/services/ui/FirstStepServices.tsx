import { Separator } from "@/components/ui/separator";
import { dataWorkProcess } from "@/entities/service/data/common";
import { AnimatedButton } from "@/shared/amimated-button/animated-button";
import { OutlinedText } from "@/shared/outlined-text/outlined-text";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";
import { FaArrowRight } from "react-icons/fa6";

type FirstStepServicesProps = {
    numberSection: string;
};

export const FirstStepServices = ({
    numberSection,
}: FirstStepServicesProps) => {
    const data = dataWorkProcess.firstStep;

    return (
        <section className="w-full flex flex-col items-center justify-start min-h-[50vh] overflow-x-clip relative bg-foreground z-10 py-5">
            <div className="w-full flex flex-col items-center justify-between max-w-7xl mt-4 text-background">
                <Separator className="bg-gray-500" />
                <div className="w-full flex items-center justify-between mt-4">
                    <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                        {data.title}
                    </span>
                    <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                        {numberSection}
                    </span>
                </div>
            </div>
            <div className="relative w-full flex items-end justify-between max-w-7xl mt-10 h-full">
                <SpinningFigure
                    className="dark:border-zinc-100"
                    top="-top-3"
                    left="left-8"
                    w="w-75 md:w-115 lg:w-65"
                    h="h-75 md:h-115 lg:h-65"
                    border="border-55 md:border-70 lg:border-45"
                    rounded="rounded-[90px] md:rounded-[100px] lg:rounded-[85px]"
                />
                <div className="flex flex-col items-center justify-center max-w-2xl ml-60 relative z-10">
                    <h1 className="text-[3rem] uppercase text-background leading-[0.95]">
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
