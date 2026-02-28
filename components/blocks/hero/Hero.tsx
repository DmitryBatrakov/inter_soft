import { ContactBanner } from "@/components/banners/contact-banner";

const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.";
export const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full min-h-screen relative">
            <div className="w-full  flex flex-col items-start justify-center z-10 col-span-1 md:col-span-2 pt-10 md:pt-20">
                <p className="font-heading text-[1rem] md:text-[1.3rem]">
                    Software development company: Iter Soft
                </p>
                <h1 className="text-[2rem] md:text-[5rem] uppercase leading-none ">
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
            <div className="flex items-center justify-center col-span-1 md:col-span-2 relative">
                <ContactBanner title="Contact us" description={description} variant="primary" />
            </div>
            <span className="absolute w-40 h-40 md:w-190 md:h-190 border-30 md:border-100 border-secondary rounded-[50px] md:rounded-[200px] -top-20 right-20 md:top-22 md:-right-55 rotate-45 animate-spin animation-duration-[25s] " />
        </section>
    );
};
