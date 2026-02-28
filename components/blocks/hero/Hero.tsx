export const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full min-h-screen relative overflow-x-clip">
            <div className="w-full flex flex-col items-start justify-center z-10 col-span-1 md:col-span-2 pt-10 md:pt-30">
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
            <div className=" col-span-1">
                <span className="absolute w-40 h-40 md:w-180 md:h-180 border-30 md:border-95 border-secondary rounded-[50px] md:rounded-[180px] -top-20 right-20 md:top-22 md:right-10 rotate-45 animate-spin animation-duration-[25s] " />
            </div>
        </section>
    );
};
