"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";
import { AboutTicker } from "@/shared/ticker/Ticker";
import { FaPlus } from "react-icons/fa";

type WorkPrinciplesProps = {
    numberSection: string;
};

interface CardData {
    title: string;
    subtitle: string;
    description: string;
}

const cardData: CardData[] = [
    {
        title: "5",
        subtitle: "Years",
        description: "We are engaged in the development of digital products",
    },

    {
        title: "80",
        subtitle: "Clients",
        description: "Number of clients who are satisfied with our work",
    },
    {
        title: "150",
        subtitle: "Projects delivered",
        description: "From landing pages to complex platforms",
    },
    {
        title: "77",
        subtitle: "percent of clients",
        description: "Most of our clients come back for new products",
    },
    {
        title: "13",
        subtitle: "members",
        description: "Working on the team in company and outsourcing",
    },
    {
        title: "11",
        subtitle: "countries",
        description: "Geography of service provision around the world",
    },
];

export const WorkPrinciples = ({ numberSection }: WorkPrinciplesProps) => {
    return (
        <section className="flex flex-col w-full min-h-screen mx-auto relative z-10 bg-background ">
            <div className="w-full flex  items-center justify-between z-10">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                    work principles
                </span>
                <span className="text-accent-foreground font-heading px-3 py-1 bg-secondary rounded-md">
                    {numberSection}
                </span>
            </div>
            <div className="flex flex-col items-center justify-between w-full">
                <div className="w-full">
                    <AboutTicker text="About us" />
                </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-2xl w-full gap-3 z-10">
                <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-medium font-inter text-muted-fo">
                    We are a professional studio that has been creating digital
                    products for businesses for over 10 years.
                </p>
                <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-medium font-inter">
                    Our expertise covers the development of websites,
                    applications, platforms, chatbots, as well as product
                    integration.
                </p>
                <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-medium font-inter">
                    Under our roof, we have united experts with an incredible
                    level of knowledge, skills, and experience. We believe in
                    the power of effectiveness and efficiency, which are the
                    basis of our work.
                </p>
            </div>
            <div className="w-full flex justify-center lg:justify-end items-center py-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
                    {cardData.map((card) => (
                        <Card
                            className="h-80 w-80 justify-between items-start rounded-lg bg-transparent backdrop-blur-xl"
                            key={card.title}
                        >
                            <CardHeader>
                                <CardTitle className="w-full">
                                    <div className="flex relative w-full">
                                        <div className="text-[6rem] pt-3 tracking-wide uppercase">
                                            {card.title}
                                        </div>
                                        <div className="absolute -top-1 -right-6 p-2 bg-primary/40 rounded-md w-10 h-10 flex items-center justify-center">
                                            <span className="font-bold text-2xl text-primary">
                                                <FaPlus size={20} />
                                            </span>
                                        </div>
                                    </div>
                                </CardTitle>
                                <CardContent className="w-full p-0 -mt-4">
                                    <span className="block w-full uppercase text-[0.9rem]">
                                        {card.subtitle}
                                    </span>
                                </CardContent>
                            </CardHeader>
                            <CardFooter className="font-inter font-medium">
                                {card.description}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
            <SpinningFigure
                className="hidden md:block"
                top="md:top-180 lg:-bottom-50"
                left="md:left-100 lg:-left-50"
                w="md:w-100 lg:w-150"
                h="md:h-100 lg:h-150"
                border="md:border-50 lg:border-80"
                rounded="md:rounded-[100px] lg:rounded-[180px]"
            />
        </section>
    );
};
