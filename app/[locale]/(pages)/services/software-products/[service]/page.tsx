import { getSoftwareProductsPageData } from "@/entities/service/lib/getServicePageData";
import { ProjectWorkServices } from "@/widgets/services/ui/ProjectWorkServices";
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

        </div>
    );
}
