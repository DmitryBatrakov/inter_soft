import { AdvantagesServices } from "@/widgets/services/ui/web-solutions/AdvantagesServices";
import { Faq } from "@/widgets/faq/Faq";
import { HeroSolutions } from "@/widgets/services/ui/web-solutions/HeroSolutions";
import { ProjectWorkServices } from "@/widgets/services/ui/web-solutions/ProjectWorkServices";
import { FirstStepServices } from "@/widgets/services/ui/web-solutions/FirstStepServices";
import { notFound } from "next/navigation";
import { OverviewServices } from "@/widgets/services/ui/web-solutions/OverviewServices";
import { WorkflowServices } from "@/widgets/services/ui/web-solutions/WorkflowServices";
import { getWebSolutionsPageData } from "@/entities/service/lib/getServicePageData";

export default async function DynamicWebSolutionsPage({params}: {params: Promise<{service: string}>}) {

    const {service} = await params;
    const data = getWebSolutionsPageData(service);

    if(!data) notFound();

    return (
        <div className="w-full min-h-screen mx-auto flex flex-col items-center justify-center relative overflow-x-clip">
            <HeroSolutions data={data.hero}/>
            <ProjectWorkServices numberSection={"01"} />
            <WorkflowServices numberSection={"02"} proccess={data.proccess} />
            <AdvantagesServices numberSection={"03"} />
            <Faq data={data.faq} numberSection={"04"}/>
            <FirstStepServices numberSection={"05"} />
            <OverviewServices data={data.overview}  />
        </div>
    );
}
