import { CtaData } from "@/entities/service/model/software-products/types";
import { CTABanner } from "@/widgets/banners/cta-banner";

type CTASoftwareProps = {
    data: CtaData;
    numberSection: string;
};

export const CTASoftware = ({ data }: CTASoftwareProps) => {
    return (
        <section className="w-full flex flex-col items-center justify-center bg-foreground relative z-10">
            <div className="max-w-7xl w-full flex flex-col items-center justify-center my-4">
                <div className=" w-full flex flex-col items-center justify-center py-6">
                    <CTABanner data={data} />
                </div>
            </div>
        </section>
    );
};
