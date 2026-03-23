"use client";

import { Separator } from "@/components/ui/separator";
import { industriesData } from "@/entities/industries/data/data";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PiArrowCircleRight } from "react-icons/pi";

export const Industries = ({ numberSection }: { numberSection: string }) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const industriesItems = industriesData.items;

    const handleItemClick = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((itemIndex) => itemIndex !== index)
                : [...prev, index],
        );
    };

    return (
        <section className="w-full flex flex-col items-center justify-start bg-foreground relative z-10 px-4">
            <Separator />
            <div className="w-full flex items-center justify-between max-w-7xl mt-4">
                <span className="uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] text-background">
                    Industries we work with
                </span>
                <span className="px-3 py-1 bg-accent-foreground rounded-md text-background">
                    {numberSection}
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5 w-full max-w-7xl py-10 md:py-20">
                <div className="flex-1">
                    <video
                        src="https://res.cloudinary.com/dlonexnpg/video/upload/v1770056577/samples/elephants.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-5 justify-center items-end flex-1">
                    {industriesItems.map((item, index) => {
                        const isOpen = openIndexes.includes(index);

                        return (
                            <div
                                key={item.title}
                                className=" flex items-center justify-end"
                                onClick={() => handleItemClick(index)}
                            >
                                <div
                                    className={cn(
                                        "p-8 rounded-3xl bg-neutral-200 text-background flex flex-col  w-full max-w-md items-start justify-between hover:scale-97 transition-all duration-400 ease-in-out",
                                        isOpen ? "gap-6" : "gap-0",
                                    )}
                                >
                                    <div className="flex items-center justify-between w-full cursor-pointer">
                                        <span className="text-[1.4rem] md:text-[1.5rem] font-inter font-extrabold md:font-bold tracking-wider">
                                            {item.title}
                                        </span>
                                        <span
                                            className={cn(
                                                "transition-transform duration-300 ease-in-out",
                                                isOpen
                                                    ? "rotate-90"
                                                    : "rotate-0",
                                            )}
                                        >
                                            <PiArrowCircleRight className="w-9 h-9 text-primary" />
                                        </span>
                                    </div>
                                    <div
                                        className={cn(
                                            "grid transition-all duration-400 ease-in-out",
                                            isOpen
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]",
                                        )}
                                    >
                                        <div className="overflow-hidden flex flex-col gap-4">
                                            <p className="text-[1rem] font-inter font-light">
                                                {item.description}
                                            </p>
                                            <div className="flex flex-col">
                                                {item.link.map((link) => (
                                                    <Link
                                                        key={link.label}
                                                        href={link.href}
                                                        className="text-[1.1rem] flex w-full items-center justify-start gap-3 group"
                                                    >
                                                        <span className="font-inter font-bold text-primary text-[1rem]">
                                                            {link.label}
                                                        </span>
                                                        <MoveRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
