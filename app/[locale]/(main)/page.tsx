import { DigitalServices } from "@/widgets/services/ui/DigitalServices";
import { Hero } from "@/widgets/hero/Hero";
import { WorkPrinciples } from "@/widgets/work-principles/WorkPrinciples";
import { Footer } from "@/widgets/footer/Footer";
import { Industries } from "@/widgets/industries/Industries";

export default function Home() {
    return (
        <div className="relative w-full font-sans shadow-xl">
            <Hero />

            <WorkPrinciples numberSection={"01"} />
            <Industries numberSection={"02"}/>
            {/* <DigitalServices numberSection={"02"} /> */}

            <Footer />
        </div>
    );
}
