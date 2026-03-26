import { getSoftwareProductsPageData } from "@/entities/service/lib/getServicePageData";
import { Faq } from "@/widgets/faq/Faq";
import { ProjectWorkServices } from "@/widgets/services/ui/web-solutions/ProjectWorkServices";
import { TechnologiesServices } from "@/widgets/technologies/TechnologiesServices";
import { CTASoftware } from "@/widgets/services/ui/software/CtaSoftware";
import { HeroSoftware } from "@/widgets/services/ui/software/HeroSoftware";
import { OverviewSoftware } from "@/widgets/services/ui/software/OverviewSoftware";
import { notFound } from "next/navigation";

export default async function SoftwareProductsPage({
    params,
}: {
    params: Promise<{ service: string }>;
}) {
    const { service } = await params;

    const data = getSoftwareProductsPageData(service);
    if (!data) notFound();

    return (
        <div className="w-full min-h-screen mx-auto flex flex-col items-center justify-center relative overflow-x-clip">
            <HeroSoftware data={data.hero} />
            <OverviewSoftware data={data.overview} numberSection={"01"} />
            <ProjectWorkServices numberSection={"02"} />
            <TechnologiesServices numberSection={"03"} />
            <CTASoftware data={data.cta} numberSection={"04"} />
            <Faq data={data.faq.items} numberSection={"05"} />

        </div>
    );
}
