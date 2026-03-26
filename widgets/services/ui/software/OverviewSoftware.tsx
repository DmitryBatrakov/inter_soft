import { Separator } from "@/components/ui/separator";
import { OverviewSaas } from "@/entities/service/model/saas-platform/type";

type OverviewSoftwareProps = {
    data: OverviewSaas;
    numberSection: string;
};

export const OverviewSoftware = ({
    data,
    numberSection,
}: OverviewSoftwareProps) => {
    return (
        <section className="w-full mx-auto flex flex-col items-center justify-start px-4 py-6 relative z-10 bg-background ">
            <Separator />
            <div className="max-w-7xl w-full flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-between  mt-4 ">
                    <span className=" uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                        {data.label}
                    </span>
                    <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                        {numberSection}
                    </span>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-10">
                    <div className="max-w-7xl w-full flex gap-10 items-center mt-10 ">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-extralight">
                                {data.title}
                            </h2>
                            <p className="text-muted-foreground text-[1rem] font-inter">
                                {data.subtitle}
                            </p>
                        </div>
                    </div>
                    <div className="font-inter grid grid-cols-1 md:grid-cols-3 gap-5 justify-center max-w-7xl">
                        {data.description.map((item) => (
                            <span
                                key={item}
                                className="text-[1rem] p-5 backdrop-blur-2xl bg-white/5 rounded-xl border border-accent"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
