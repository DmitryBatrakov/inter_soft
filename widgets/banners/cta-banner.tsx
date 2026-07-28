import { CtaData } from "@/entities/service/model/software-products/types";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "@/shared/amimated-button/animated-button";

type CTABannerProps = {
    data: CtaData;
    className?: string;
};

export const CTABanner = ({ data, className }: CTABannerProps) => {
    return (
            <div className={cn("relative bg-muted rounded-2xl overflow-hidden w-full", className)}>
                <div className="p-10 flex flex-col text-center items-center justify-center text-foreground gap-5">
                    {data.label && <span className="text-[1.2rem] font-inter font-medium max-w-md">{data.label}</span>}
                    {data.title && <h2 className="text-[2rem] font-light">{data.title}</h2>}
                    {data.cta_question && <p className="text-[1.2rem] font-inter font-medium max-w-md">
                        {data.cta_question}
                    </p>}
                    {data.cta && <AnimatedButton className="px-5 py-3 text-[1rem]">
                        {data.cta}
                    </AnimatedButton>}
                </div>
                <span className="bg-accent-foreground w-23 h-23 rounded-full absolute top-7 left-7 border border-mutted-foreground" />
                <span className="bg-primary w-8 h-8 rounded-full absolute top-25 left-30" />
                <span className="bg-primary w-30 h-30 rounded-full absolute -bottom-15 right-15" />
                <span className="bg-muted-foreground w-5 h-5 rounded-full absolute bottom-14 right-16" />
            </div>
    );
};
