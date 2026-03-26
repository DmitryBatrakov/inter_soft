import { CtaData } from "@/entities/service/model/software-products/types";
import { AnimatedButton } from "@/shared/amimated-button/animated-button";

type CTABannerProps = {
    data: CtaData;
};

export const CTABanner = ({ data }: CTABannerProps) => {
    return (
        <div className="w-full max-w-7xl relative px-4 py-8">
            <div className="relative bg-muted rounded-2xl overflow-hidden">
                <div className="p-10 flex flex-col text-center items-center justify-center text-foreground gap-5">
                    <h2 className="text-[2rem] font-light">{data.title}</h2>
                    <p className="text-[1.2rem] font-inter font-medium max-w-md">
                        {data.cta_question}
                    </p>
                    <AnimatedButton className="px-5 py-3 text-[1rem]">
                        {data.cta}
                    </AnimatedButton>
                </div>
                <span className="bg-accent-foreground w-23 h-23 rounded-full absolute top-7 left-7 border border-mutted-foreground" />
                <span className="bg-primary w-8 h-8 rounded-full absolute top-25 left-30" />
                <span className="bg-primary w-30 h-30 rounded-full absolute -bottom-15 right-15" />
                <span className="bg-muted-foreground w-5 h-5 rounded-full absolute bottom-14 right-16" />
            </div>
        </div>
    );
};
