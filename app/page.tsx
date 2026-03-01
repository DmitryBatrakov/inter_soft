import { DigitalServices } from "@/components/blocks/digital-services/DigitalServices";
import { Hero } from "@/components/blocks/hero/Hero";
import { WorkPrinciples } from "@/components/blocks/work-principles/WorkPrinciples";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center font-sans relative">
            <Hero />
            <Separator />
            <WorkPrinciples numberSection={"01"} />
            <Separator />
            <DigitalServices numberSection={"02"} />
            <Separator />
        </div>
    );
}
