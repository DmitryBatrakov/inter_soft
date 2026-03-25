import { Separator } from "@/components/ui/separator"

export const TechnologiesServices = ({ numberSection }: { numberSection: string }) => {
    return (
        <section className="w-full flex flex-col items-center justify-start mx-auto bg-background px-4 pt-4  relative z-10 min-h-screen">
            <Separator />
            <div className="w-full flex flex-col items-center justify-between max-w-7xl mt-4">
                <div className="w-full flex items-center justify-between max-w-7xl ">
                    <span className="uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] ">
                        technologies
                    </span>
                    <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                        {numberSection}
                    </span>
                </div>
            </div>
        </section>
    )
}