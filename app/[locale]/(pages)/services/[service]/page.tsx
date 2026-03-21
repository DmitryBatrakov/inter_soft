import { getServicePageData } from "@/entities/service/lib/getServicePageData";
import { AdvantagesServices } from "@/widgets/services/ui/AdvantagesServices";
import { FaqServices } from "@/widgets/services/ui/FaqServices";
import { HeroServices } from "@/widgets/services/ui/HeroServices";
import { ProjectWorkServices } from "@/widgets/services/ui/ProjectWorkServices";
import { FirstStepServices } from "@/widgets/services/ui/FirstStepServices";
import { notFound } from "next/navigation";
import { OverviewServices } from "@/widgets/services/ui/OverviewServices";

export default async function DynamicServicesPage({params}: {params: Promise<{service: string}>}) {


    const {service} = await params;
    const data = getServicePageData(service);

    if(!data) notFound();


    return (
        <div className="w-full min-h-screen mx-auto flex flex-col items-center justify-center relative overflow-x-clip">
            <HeroServices data={data.hero}/>
            <ProjectWorkServices numberSection={"01"} />
            <AdvantagesServices numberSection={"02"} />
            <FirstStepServices numberSection={"03"} />
            <OverviewServices data={data.overview}  />
            <FaqServices data={data.faq} numberSection={"04"}/>
        </div>
    );
}
