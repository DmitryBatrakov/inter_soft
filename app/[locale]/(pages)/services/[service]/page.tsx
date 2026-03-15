import { getServicePageData } from "@/entities/service/lib/getServicePageData";
import { FaqServices } from "@/widgets/services/ui/FaqServices";
import { HeroServices } from "@/widgets/services/ui/HeroServices";
import { notFound } from "next/navigation";

export default async function DynamicServicesPage({params}: {params: Promise<{service: string}>}) {


    const {service} = await params;
    const data = getServicePageData(service);

    if(!data) notFound();


    return (
        <div>
            <p>Dynamic Service page</p>
            <HeroServices data={data.hero}/>
            <FaqServices data={data.faq} />
        </div>
    );
}
