import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { OverviewService } from "@/entities/service/model/types";
import { IoArrowDownSharp } from "react-icons/io5";

type OverviewServicesProps = {
    data: OverviewService;
};

export const OverviewServices = ({ data }: OverviewServicesProps) => {
    return (
        <section className="w-full flex flex-col items-center justify-start bg-foreground min-h-screen relative z-10">
            <div className="max-w-7xl w-full mt-20 flex flex-col items-center justify-center">
                <Separator className="bg-gray-500" />
                <div className="w-full flex flex-col items-center justify-between mt-4">
                    <div className="w-full bg-neutral-200 flex items-start justify-between p-6 rounded-md">
                        <div className="flex items-start justify-start w-full max-w-sm">
                            <h1 className="text-[1rem] uppercase text-background leading-[0.95]">
                                {data.title}
                            </h1>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-5 max-w-2xl">
                            <h2 className="text-[2rem] uppercase text-background leading-tight">
                                {data.subtitle}
                            </h2>
                            <p className="text-[1rem] text-background  font-inter">
                                {data.description}
                            </p>
                            <div className="flex items-end justify-end w-full pt-10">
                                <Button variant="customNeutral">
                                    Expand
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
