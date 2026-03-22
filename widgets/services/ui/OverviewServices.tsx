import { Button } from "@/components/ui/button";
import { OverviewService } from "@/entities/service/model/types";
import { IoArrowDownSharp } from "react-icons/io5";

type OverviewServicesProps = {
    data: OverviewService;
};

export const OverviewServices = ({ data }: OverviewServicesProps) => {
    return (
        <section className="w-full flex flex-col items-center justify-start bg-foreground relative z-10 px-4 py-5 md:py-15">
            <div className="max-w-7xl w-full flex flex-col items-center justify-center">
                <div className="w-full flex flex-col items-center justify-between mt-5 lg:mt-15">
                    <div className="w-full bg-neutral-200 flex flex-col md:flex-row items-start justify-between p-6 rounded-md gap-10 md:gap-7">
                        <div className="flex items-start justify-start w-full max-w-sm">
                            <h1 className="text-[1rem] uppercase text-background leading-[0.95]">
                                {data.title}
                            </h1>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-5 max-w-2xl">
                            <h2 className="text-[1.5rem] md:text-[2rem] uppercase text-background leading-tight">
                                {data.subtitle}
                            </h2>
                            <p className="text-[1rem] text-background font-inter">
                                {data.description}
                            </p>
                            <div className="flex items-center justify-center md:justify-end w-full pt-5">
                                <Button
                                    variant="customNeutral"
                                    className="flex items-center justify-center  md:max-w-[17vw] lg:max-w-[13vw] w-full gap-2 py-6"
                                >
                                    <span>Expand</span>
                                    <IoArrowDownSharp className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
