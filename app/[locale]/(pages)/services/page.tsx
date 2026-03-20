"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { items } from "@/entities/service/data/service-accordion-items";
import { cn } from "@/lib/utils";
import { OutlinedText } from "@/shared/outlined-text/outlined-text";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ServicesPage() {
    return (
        <div className="w-full min-h-screen mx-auto flex items-center justify-center relative overflow-x-clip z-10 bg-background">
            <div className="w-full max-w-7xl relative z-10 p-4 mt-10">
                <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold mt-20 mb-10 lg:mt-30 md:mb-20">
                    Digital Marketing Services
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
                    {items.map((item, i) => {
                        return (
                            <Card
                                key={item.id}
                                className="px-4 py-6 lg:px-6 lg:py-6 bg-transparent backdrop-blur-2xl min-h-[250px] md:min-h-[350px] lg:min-h-[500px] md:max-w-[600px]  flex flex-col justify-between group transition-all duration-300 hover:bg-primary border p-4
                                   [--stroke-color:var(--muted-foreground)] hover:[--stroke-color:white]"
                            >
                                <CardHeader>
                                    <CardTitle className="w-full">
                                        <div className="flex flex-col items-start justify-start relative w-full">
                                            <div className=" top-0 -left-7">
                                                <span className="font-bold text-[1.8rem] text-primary group-hover:text-black transition-colors duration-300">
                                                    {item.id}
                                                </span>
                                            </div>
                                            <div className="uppercase">
                                                <OutlinedText
                                                    strokeColor="var(--stroke-color)"
                                                    strokeWidth={0.5}
                                                    className="text-[2rem] lg:text-[3rem] tracking-wide uppercase group-hover:text-white transition-colors duration-300"
                                                >
                                                    {item.title}
                                                </OutlinedText>
                                            </div>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="table w-fit border-separate border-spacing-y-2 lg:[border-spacing:0_1.5rem] group-hover:text-black">
                                        {item.links.map((link) => (
                                            <div
                                                key={link.label}
                                                className="table-row  opacity-50 hover:opacity-100 transition-opacity duration-300 ease-out"
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={cn(
                                                        "table-cell align-top pr-5 text-sm uppercase whitespace-pre-line  leading-tight transition-all duration-200 ease-out",
                                                    )}
                                                >
                                                    <span className="tracking-wide">
                                                        {link.label}
                                                    </span>
                                                </Link>
                                                <span className="table-cell align-top pt-0.5">
                                                    <FaArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
            <SpinningFigure
                className=""
                top="top-1/2 -translate-y-1/2"
                left="left-1/2 -translate-x-1/2"
                w="w-75 md:w-115 lg:w-170"
                h="h-75 md:h-115 lg:h-170"
                border="border-55 md:border-70 lg:border-90"
                rounded="rounded-[90px] md:rounded-[100px] lg:rounded-[150px]"
            />
        </div>
    );
}
