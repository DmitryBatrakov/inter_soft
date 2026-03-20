import { Separator } from "@/components/ui/separator";
import { FaqItem as FaqItemType } from "@/entities/service/model/types";
import FaqList from "@/shared/faq-item/FaqItem";

export const FaqServices = ({ data, numberSection }: { data: FaqItemType[], numberSection: string }) => {
    return (
        <section className="w-full flex flex-col items-center justify-center min-h-screen overflow-x-clip relative bg-background z-10">
            <Separator />
            <div className="w-full flex items-center justify-between max-w-7xl my-4 p-4">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                We understand that you are out of power
                </span>
                <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                    {numberSection}
                </span>
            </div>
            <div className="max-w-7xl w-full relative flex flex-col gap-10 items-center justify-start z-10 p-2 my-10">
                <FaqList faqs={data} />
            </div>
        </section>
    );
};

