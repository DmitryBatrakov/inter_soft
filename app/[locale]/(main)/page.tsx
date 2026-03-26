import { Hero } from "@/widgets/main/Hero";
import { WorkPrinciples } from "@/widgets/work-principles/WorkPrinciples";
import { Footer } from "@/widgets/footer/Footer";
import { Industries } from "@/widgets/main/Industries";
import { Services } from "@/widgets/main/Services";

export default function Home() {
    return (
        <div className="relative w-full font-sans shadow-xl">
            <Hero />

            <Services numberSection={"01"} />
            <WorkPrinciples numberSection={"02"} />
            <Industries numberSection={"03"}/>

            <Footer />
        </div>
    );
}
