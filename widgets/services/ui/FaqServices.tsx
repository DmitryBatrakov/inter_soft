import { FaqItem as FaqItemType } from "@/entities/service/model/types";
import FaqList from "@/shared/faq-item/FaqItem";

export const FaqServices = ({ data }: { data: FaqItemType[] }) => {
    return (
        <section className="w-full flex flex-col items-center justify-center min-h-screen overflow-x-clip relative">
            <div className="max-w-7xl w-full relative flex flex-col gap-10 items-center justify-start z-10 p-2 mb-10">
                <FaqList faqs={data} />
            </div>
        </section>
    );
};
