"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { items } from "@/entities/service/data/service-accordion-items";
import { Link } from "@/i18n/navigation";

export function ServicesAccordionHome() {
    const [activeIndex, setActiveIndex] = useState<number>(0);


    return (
        <div className="flex flex-col lg:flex-row w-full h-[600px] gap-2">
            {items.map((item, i) => {
                const active = i === activeIndex;

                return (
                    <article
                        key={item.id}
                        onMouseEnter={() => setActiveIndex(i)}
                        onFocus={() => setActiveIndex(i)}
                        className={cn(
                            "relative rounded-2xl bg-neutral-200 transition-all duration-500 ease-out overflow-hidden",
                            active ? "flex-6" : "flex-1",
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 h-full p-4 lg:p-8 flex flex-col justify-between text-black transition-all duration-800 ease-out",
                                active
                                    ? "opacity-90  scale-100"
                                    : "opacity-0  scale-90 pointer-events-none",
                            )}
                        >
                            <h3
                                className={cn(
                                    " text-[2rem] lg:text-[4.5rem] text-left origin-left will-change-transform uppercase whitespace-nowrap transition-transform duration-800  ease-out",
                                    active
                                        ? "opacity-90  scale-100"
                                        : "opacity-0  scale-70",
                                )}
                            >
                                {item.title}
                            </h3>
                            <div
                                className={cn(
                                    "flex flex-col text-sm opacity-70 w-full h-full transition-all duration-800 ease-out ",
                                    active
                                        ? "opacity-100 -translate-y-2 scale-100"
                                        : "opacity-0 translate-y-0 scale-90",
                                )}
                            >
                                <div className="table w-fit border-separate [border-spacing:0_1.5rem]">
                                    {item.links.map((link) => (
                                        <div
                                            key={link.label}
                                            className="table-row text-black opacity-50 hover:opacity-100 transition-opacity duration-300 ease-out"
                                        >
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "table-cell align-top pr-5 text-sm uppercase whitespace-pre-line  leading-tight transition-all duration-200 ease-out",
                                                    active
                                                        ? "opacity-100 translate-y-0 scale-100"
                                                        : "opacity-0 -translate-y-2 scale-90",
                                                )}
                                            >
                                                <span className="tracking-wide" >
                                                    {link.label}
                                                </span>
                                            </Link>
                                            <span className="table-cell align-top pt-0.5">
                                                <FaArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className={cn(
                                        "absolute translate-x-150 translate-y-150 w-full h-full transition-transform duration-500 ease-out will-change-transform delay-150",
                                        active
                                            ? "translate-y-25 translate-x-52  scale-100 rotate-[-30deg]"
                                            : " scale-95 pointer-events-none rotate-0",
                                    )}
                                >
                                    <div className="relative overflow-hidden w-[620px] h-[550px] origin-bottom-right">
                                        <div className="absolute w-2/3 rounded-[28px] inset-0 bg-white shadow-2xl" />

                                        <div className="absolute inset-3 rounded-[20px] overflow-hidden">
                                            {item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover w-full h-full"
                                                    unoptimized
                                                />
                                            ) : (
                                                <div className="w-[600px] h-auto bg-gray-200"></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="text-[1.5rem] lg:text-4xl font-bold">
                                {item.id}
                            </span>
                        </div>

                        <div
                            className={cn(
                                "absolute inset-0 h-full p-1 lg:p-8 flex flex-col justify-between items-center transition-all duration-200 ease-out",
                                active
                                    ? "opacity-0 -translate-y-3 scale-90 pointer-events-none"
                                    : "opacity-100 translate-y-0 scale-100",
                            )}
                        >
                            <span
                                className={cn(
                                    "lg:[writing-mode:vertical-rl] uppercase whitespace-nowrap text-[2rem] text-black lg:text-4xl transition-all duration-200 ease-out",
                                    active
                                        ? "opacity-0 translate-y-2 scale-90"
                                        : "opacity-90 translate-y-0 scale-100",
                                )}
                            >
                                {item.title}
                            </span>
                            <span className="text-[2rem] text-black lg:text-4xl font-bold opacity-50">
                                {item.id}
                            </span>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
