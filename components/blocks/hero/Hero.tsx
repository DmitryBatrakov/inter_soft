import { HeroBanner } from "@/components/banners/hero-banner";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";
import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full min-h-screen relative mx-auto gap-40 md:gap-15 max-w-7xl">
            <div className="w-full flex flex-col items-start justify-center z-10 col-span-1 md:col-span-2  lg:pt-20 lg:mt-10">
                <p className="font-heading text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                    Software development company: Iter Soft
                </p>
                <h1 className="text-[2rem] md:text-[4rem] lg:text-[5rem] uppercase leading-none ">
                    Reliable and
                    <br />
                    <span className="inline-block border-3 border-primary rounded-md px-1 md:px-2">
                        effective <span className="text-primary">digital</span>
                    </span>
                    <br />
                    solutions for
                    <br />
                    business
                </h1>
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 relative w-full mt-20">
                <HeroBanner title="Not sure where to start?">
                    <Link
                        href="/contact"
                        className="inline-flex items-center group border-2 border-accent py-1 px-2 md:py-2 md:px-3 rounded-md"
                    >
                        <span className="text-accent text-[0.9rem] md:text-xl">
                            Explore our services
                        </span>
                        <span className="inline-flex items-center w-0 group-hover:w-8 overflow-hidden transition-[width] duration-400 ease-in-out">
                            <FaArrowRightFromBracket className="text-accent w-5 h-5 ml-2 shrink-0" />
                        </span>
                    </Link>
                </HeroBanner>
            </div>
            <SpinningFigure
                w="w-50 md:w-100 lg:w-190"
                h="h-50 md:h-100 lg:h-190"
                border="border-30 md:border-50 lg:border-100"
                rounded="rounded-[50px] md:rounded-[100px] lg:rounded-[200px]"
                top="top-25 md:top-22 lg:top-22"
                right="-right-5 md:right-0 lg:-right-55"
            />
        </section>
    );
};
