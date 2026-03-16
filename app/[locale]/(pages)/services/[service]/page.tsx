import { getServicePageData } from "@/entities/service/lib/getServicePageData";
import { AdvantagesServices } from "@/widgets/services/ui/AdvantagesServices";
import { FaqServices } from "@/widgets/services/ui/FaqServices";
import { HeroServices } from "@/widgets/services/ui/HeroServices";
import { ProjectWorkService } from "@/widgets/services/ui/ProjectWorkService";
import { notFound } from "next/navigation";

export default async function DynamicServicesPage({params}: {params: Promise<{service: string}>}) {


    const {service} = await params;
    const data = getServicePageData(service);

    if(!data) notFound();


    return (
        <div className="w-full min-h-screen mx-auto flex flex-col items-center justify-center relative overflow-x-clip">
            <HeroServices data={data.hero}/>
            <ProjectWorkService numberSection={"01"} />
            <AdvantagesServices numberSection={"02"} />
            <FaqServices data={data.faq} numberSection={"03"}/>
        </div>
    );
}
