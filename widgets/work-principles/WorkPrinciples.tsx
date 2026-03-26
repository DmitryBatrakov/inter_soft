"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cardData } from "@/entities/work-principles/model/data";
import { WorkPrinciplesProps } from "@/entities/work-principles/model/type";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";
import { Ticker } from "@/shared/ticker/Ticker";
import { FaPlus } from "react-icons/fa";

export const WorkPrinciples = ({ numberSection }: WorkPrinciplesProps) => {
    return (
        <section className="w-full mx-auto flex flex-col items-center justify-center px-4 py-6 bg-background relative z-10">
            <Separator />
            <div className="w-full flex items-center justify-between max-w-7xl mt-4">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                    work principles
                </span>
                <span className="text-accent-foreground font-heading px-3 py-1 bg-secondary rounded-md">
                    {numberSection}
                </span>
            </div>
            <div className="flex flex-col items-center justify-between w-full">
                <div className="w-full">
                    <Ticker text="About us" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start max-w-full lg:max-w-7xl w-full relative">
                <div className="flex flex-col items-start justify-start  lg:max-w-2xl w-full gap-3 relative z-10 text-muted-foreground">
                    <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-medium font-inter">
                        We are a software company building scalable digital
                        products and systems.
                    </p>
                    <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-medium font-inter">
                        From web platforms to complex integrations, we create
                        solutions that solve real-world challenges.
                    </p>
                    <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-medium font-inter">
                        Our team combines strong engineering expertise with a
                        product-driven approach to deliver reliable and
                        efficient results.
                    </p>
                </div>
                <div className="w-full flex justify-center lg:justify-end items-center py-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        {cardData.map((card) => (
                            <Card
                                className="max-w-[300px] min-h-[280px] lg:max-h-80 lg:max-w-80 lg:min-w-[280px] lg:min-h-[300px] justify-between items-start rounded-lg bg-transparent backdrop-blur-xl px-4 pb-4 lg:px-4"
                                key={card.title}
                            >
                                <CardHeader className="p-0 w-full">
                                    <CardTitle className="w-full">
                                        <div className="inline-flex w-fit items-start">
                                            <div className="text-[5rem] lg:text-[7rem] p-0 tracking-wide uppercase leading-none">
                                                {card.title}
                                            </div>
                                            <div className="-ml-4 -mt-4 shrink-0 p-2 bg-primary/40 rounded-md w-10 h-10 flex items-center justify-center">
                                                <span className="font-bold text-2xl text-primary">
                                                    <FaPlus size={20} />
                                                </span>
                                            </div>
                                        </div>
                                    </CardTitle>
                                    <CardContent className="w-full p-0 -mt-3">
                                        <span className="block w-full uppercase text-[1rem]">
                                            {card.subtitle}
                                        </span>
                                    </CardContent>
                                </CardHeader>
                                <CardFooter className="font-inter font-medium px-0">
                                    {card.description}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
                <SpinningFigure
                    className="hidden md:block"
                    top="md:top-90 lg:top-70"
                    left="md:left-50 lg:-left-40"
                    w="md:w-100 lg:w-150"
                    h="md:h-100 lg:h-150"
                    border="md:border-50 lg:border-80"
                    rounded="md:rounded-[100px] lg:rounded-[180px]"
                />
            </div>
        </section>
    );
};
