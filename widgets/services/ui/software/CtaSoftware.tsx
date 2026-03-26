import { CtaData } from "@/entities/service/model/saas-platform/type";
import { AnimatedButton } from "@/shared/amimated-button/animated-button";

export const CTASoftware = ({ data }: { data: CtaData }) => {
    return ( 
        <section className="w-full flex flex-col items-center justify-center bg-foreground relative z-10">
            <div className="max-w-7xl w-full flex flex-col items-center justify-center my-4">
                <div className=" w-full flex flex-col items-center justify-center py-6">
                    <h2 className="text-[2rem] font-light text-background">{data.title}</h2>
                    <p className="text-[1.2rem] font-inter font-medium max-w-md text-background">{data.cta_question}</p>
                    <AnimatedButton className="px-5 py-3 text-[1rem]">{data.cta}</AnimatedButton>

                    <p className="text-[2rem] font-inter font-medium text-background">Блять в душе не ебу что тут писать, но нужен какой-то призыв к действию</p>
                    <p className="text-[2rem] font-inter font-medium text-background">То что написано вверху хуйня для примера</p>
                </div>
            </div>
        </section>
    );
};
