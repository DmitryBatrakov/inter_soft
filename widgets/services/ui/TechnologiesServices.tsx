import { Separator } from "@/components/ui/separator";
import { technologiesData } from "@/entities/common/data/common";
import { CtaData } from "@/entities/service/model/saas-platform/type";
import { CTABanner } from "@/widgets/banners/cta-banner";
import Image from "next/image";

type TechnologiesServicesProps ={
    numberSection: string;
    data: CtaData;
}

export const TechnologiesServices = ({data, numberSection}: TechnologiesServicesProps) => {
    const technologiesItems = technologiesData.items;

    return (
        <section className="w-full flex flex-col items-center justify-start mx-auto bg-foreground px-4 relative z-10">
            <Separator />
            <div className="w-full flex flex-col items-center justify-between max-w-7xl gap-10 px-4">
                <div className="w-full flex items-center justify-between mt-4">
                    <span className="uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] text-background">
                        {technologiesData.label}
                    </span>
                    <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                        {numberSection}
                    </span>
                </div>
                <div className="w-full flex flex-col items-center justify-center  gap-10">
                    <div className="w-full flex items-start justify-start">
                        <p className="text-muted text-[1rem] font-medium font-inter max-w-lg ">
                            {technologiesData.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center w-full">
                        {technologiesItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col items-center justify-center gap-7"
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-20 h-20 md:w-35 md:h-35"
                                    width={1}
                                    height={1}
                                />
                                <p className="text-background text-[1rem] md:text-[1.5em] font-bold font-inter">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <CTABanner data={data} />
            </div>
        </section>
    );
};
