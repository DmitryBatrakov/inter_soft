import { DigitalServices } from "@/components/blocks/digital-services/DigitalServices";
import { Hero } from "@/components/blocks/hero/Hero";
import { WorkPrinciples } from "@/components/blocks/work-principles/WorkPrinciples";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <div className="mx-auto w-full font-sans">

            <Hero />
            <Separator />
            <WorkPrinciples numberSection={"01"} />
            <DigitalServices numberSection={"02"} />
            {/* <Separator /> */}
        </div>
    );
}
