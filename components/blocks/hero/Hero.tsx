export const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 items-start justify-between w-full min-h-[70vh] overflow-x-hidden">
            <div className="w-full flex flex-col items-start justify-start relative col-span-1 md:col-span-2 z-10">
                <p className="font-heading text-[1rem] md:text-[1.3rem]">
                    Software development company: Iter Soft
                </p>
                <h1 className="text-[2rem] md:text-[5rem] uppercase leading-none tracking-tight">
                    Reliable and
                    <br />
                    <span className="inline-block border-3 border-primary rounded-md px-1 md:px-2">
                        {" "}
                        effective <span className="text-primary">digital</span>
                    </span>
                    <br />
                    solutions for
                    <br />
                    business
                </h1>
            </div>
            <div className="relative w-full col-span-1">
                <span className="absolute w-40 h-40 md:w-175 md:h-175 border-50 md:border-100 border-secondary rounded-[100px] md:rounded-[180px] -top-50 right-0 md:-top-30 md:-right-40 rotate-45 animate-spin animation-duration-[20s] " />
            </div>
        </section>
    );
};
