import { DigitalServices } from "@/widgets/services/ui/DigitalServices";
import { Hero } from "@/widgets/hero/Hero";
import { WorkPrinciples } from "@/widgets/work-principles/WorkPrinciples";
import { Footer } from "@/widgets/footer/Footer";

export default function Home() {
    return (
        <div className="relative w-full font-sans shadow-xl">
            <Hero />

            <WorkPrinciples numberSection={"01"} />

            <DigitalServices numberSection={"02"} />
            <div className="sticky bottom-0 w-full z-0  flex items-center justify-center">
                <Footer />
            </div>
        </div>
    );
}
