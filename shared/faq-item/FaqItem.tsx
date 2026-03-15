"use client";

import { useState } from "react";
import { FaqItem as FaqItemType } from "@/entities/service/model/types";

interface FaqItemProps {
    question: string;
    answer: string;
    open?: boolean;
    onToggle?: () => void;
}

export function FaqItem({
    question,
    answer,
    onToggle,
    open = false,
}: FaqItemProps) {

    return (
        <div
            className={`relative border-b-2 border-background overflow-hidden cursor-pointer group`}
            onClick={onToggle}
        >
            <div className={`absolute inset-0 bg-primary z-0 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] origin-left
                            ${open ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}/>
            {/* Header */}
            <div className={`relative z-10 flex items-center justify-between gap-5 px-7 py-4 lg:py-10`}>
                <span className={`absolute left-0 top-0 h-full w-[4px] bg-primary transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}/>
                
                <span className={`font-black uppercase tracking-wide text-[1rem] lg:text-[1.8rem] lg:font-light leading-tight transition-colors duration-200
                            ${open ? "text-background" : "text-white group-hover:text-background"}`}>
                    {question}
                </span>

                {/* +/- icon */}
                <span className="relative shrink-0 w-8 h-8">
                    {/* horizontal bar */}
                    <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22px] h-[2.5px] rounded-sm transition-colors duration-200
                                    ${open ? "bg-[#111]" : "bg-primary group-hover:bg-[#111]"}`}/>
                    {/* vertical bar */}
                    <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2.5px] h-[22px] rounded-sm transition-all duration-350 ease-[cubic-bezier(0.76,0,0.24,1)]
                                    ${open ? "bg-[#111] rotate-90 opacity-0" : "bg-primary group-hover:bg-[#111] rotate-0 opacity-100"}`}/>
                </span>
            </div>

            {/* Body with grid animation */}
            <div className={`relative z-10 grid  transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]
                            ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden ">
                    <p className="px-7 pb-6 pt-1 text-[1rem] lg:text-[1.2rem] leading-[1.7] text-[#1a1a1a] font-inter font-normal text-start">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FaqList({ faqs }: { faqs: FaqItemType[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mx-auto bg-[#1a1a1a]">
            {faqs.map((faq, i) => (
                <FaqItem
                    key={i}
                    {...faq}
                    open={openIndex === i}
                    onToggle={() =>
                        setOpenIndex((prev) => (prev === i ? null : i))
                    }
                />
            ))}
        </div>
    );
}
