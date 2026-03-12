import { AnimatedButton } from "@/shared/amimated-button/animated-button";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";
import { FaArrowRight } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center mx-auto px-4 py-6 overflow-x-clip relative bg-background">
            <div className="max-w-7xl w-full py-10 lg:py-0 lg:pt-20 lg:pb-10 relative grid grid-cols-1 items-start justify-center gap-10">
                <div className="flex flex-col lg:flex-row items-center md:items-start justify-center md:justify-between gap-20 md:gap-10 relative z-10">
                    <div className="flex flex-col items-start justify-start text-5xl md:text-6xl lg:text-8xl uppercase h-full">
                        <span>Inter</span>
                        <span>Soft</span>
                        <h2>Development</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-start h-full justify-center gap-5 p-5 bg-secondary rounded-md max-w-sm">
                            <p className="text-5xl uppercase">
                                Ready to discuss your new project?
                            </p>
                            <AnimatedButton>Let`s begin</AnimatedButton>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-end gap-15 md:gap-30 text-secondary-foreground relative z-10">
                    <div className="flex flex-col gap-5 w-96">
                        <div>
                            <p className="font-inter text-xl font-semibold">
                                Contact Us
                            </p>
                            <Separator className="" />
                        </div>
                        <div className="flex items-start justify-start gap-5 hover:text-primary transition-all duration-200">
                            <div className="flex items-center justify-center gap-3 ">
                                <IoPhonePortraitOutline size={25}/>
                                <span>+972 00 000 00 00</span>
                            </div>
                            <FaArrowRight />
                        </div>
                        <div className="flex items-start justify-start gap-5 hover:text-primary transition-all duration-200">
                            <div className="flex items-center justify-center gap-3">
                                <MdEmail size={25}/>
                                <span>info@intersoft.com</span>
                            </div>
                            <FaArrowRight />
                        </div>
                        <div className="flex items-start justify-start gap-5 hover:text-primary transition-all duration-200">
                            <div className="flex items-center justify-center gap-3">
                                <FaTelegramPlane size={25}/>
                                <span>@intersoft</span>
                            </div>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-96">
                        <div>
                            <p className="font-inter text-xl font-semibold">
                                Follow Us
                            </p>
                            <Separator className="" />
                        </div>
                        <div className="flex items-start justify-start gap-5 hover:text-primary transition-all duration-200">
                            <div className="flex items-center justify-center gap-3">
                                <FaFacebook  size={25}/>
                                <span>@facebook</span>
                            </div>
                            <FaArrowRight />
                        </div>
                        <div className="flex items-start justify-start gap-5 hover:text-primary transition-all duration-200">
                            <div className="flex items-center justify-center gap-3">
                                <BsInstagram size={25}/>
                                <span>@instagram</span>
                            </div>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <SpinningFigure
                    className="md:block"
                    top="-top-10 md:-top-2 lg:top-5"
                    left="-left-13 md:left-100 lg:-left-45"
                    w="w-70 md:w-90 lg:w-120"
                    h="h-70 md:h-90 lg:h-120"
                    border="border-45 md:border-55 lg:border-80"
                    rounded="rounded-[100px] md:rounded-[90px] lg:rounded-[170px]"
                />
            </div>
        </footer>
    );
};
