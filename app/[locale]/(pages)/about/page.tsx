import { TechnologiesServices } from "@/widgets/services/ui/TechnologiesServices";

export default function AboutPage() {
    return (
        <div className="w-full min-h-screen mx-auto flex flex-col items-center justify-center relative overflow-x-clip">
            <TechnologiesServices numberSection={"01"} />
        </div>
    );
}
