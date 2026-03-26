import { HeroBanner } from "@/widgets/banners/hero-banner";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";
import { heroMainData } from "@/entities/shared/hero-main";
import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full min-h-screen px-2 overflow-x-clip bg-background relative z-10">
            <div className="max-w-7xl w-full relative px-1 md:px-4">
                <div className=" flex flex-col items-start justify-center col-span-1 md:col-span-2 lg:pt-20 z-10 relative">
                    <p className="font-heading text-[0.9rem] lg:text-[1.3rem]">
                        {heroMainData.sectionLabel}
                    </p>
                    <h1 className="text-[1.9rem] md:text-[3.2rem] lg:text-[3.8rem] uppercase leading-none">
                        {heroMainData.heading.lineOne}
                        <br />
                        <span className="inline-block border-3 border-primary rounded-md px-1 md:px-2">
                            <span className="mr-2 md:mr-5">
                                {heroMainData.heading.highlightedPrefix}
                            </span>
                            <span className="text-primary">
                                {heroMainData.heading.highlightedAccent}
                            </span>
                        </span>
                        <br />
                        <span>{heroMainData.heading.lineTwo} </span>
                        <br />
                        <span>{heroMainData.heading.lineThreePrefix} </span>
                        {/* <span>business </span> */}
                        <span>{heroMainData.heading.lineThreeSuffix}</span>
                    </h1>
                </div>

                <div className="flex items-center justify-center col-span-1 md:col-span-2 relative w-full mt-40 md:mt-20 z-10">
                    <HeroBanner title={heroMainData.bannerTitle}>
                        <Link
                            href="/services"
                            className="inline-flex items-center group border-2 border-accent py-1 px-2 md:py-2 md:px-3 rounded-md"
                        >
                            <span className="text-accent text-[0.9rem] md:text-xl">
                                {heroMainData.ctaLabel}
                            </span>
                            <span className="inline-flex items-center w-0 group-hover:w-8 overflow-hidden transition-[width] duration-400 ease-in-out">
                                <FaArrowRightFromBracket className="text-accent w-5 h-5 ml-2 shrink-0" />
                            </span>
                        </Link>
                    </HeroBanner>
                </div>
                <SpinningFigure
                    w="w-50 md:w-100 lg:w-175"
                    h="h-50 md:h-100 lg:h-175"
                    border="border-30 md:border-50 lg:border-100"
                    rounded="rounded-[50px] md:rounded-[100px] lg:rounded-[200px]"
                    top="-top-5 md:top-22 lg:top-5"
                    right="-right-10 md:right-0 lg:-right-35"
                />
            </div>
        </section>
    );
};
