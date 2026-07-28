"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    serviceItemKeys,
    type ServiceItemKey,
} from "@/entities/service/data/main-page/service";
import { AnimatedButton } from "@/shared/amimated-button/animated-button";
import { AnimatedLink } from "@/shared/animated-link/animated-link";
import { SpinningFigure } from "@/shared/spinning-fidure/spinning-figure";
import { Ticker } from "@/shared/ticker/Ticker";
import { CTABanner } from "../banners/cta-banner";
import { useTranslations } from "next-intl";
import { Cpu, Layers, Workflow, PenTool, type LucideIcon } from "lucide-react";

type ServiceProps = {
    numberSection: string;
};

// Icons are React components — they belong in code, keyed by the item key.
const SERVICE_ICONS: Record<ServiceItemKey, LucideIcon> = {
    "custom-software": Cpu,
    "turnkey-solutions": Layers,
    "low-code": Workflow,
    design: PenTool,
};

export const Services = ({ numberSection }: ServiceProps) => {
    const t = useTranslations("Services");
    const tc = useTranslations("Common");
    return (
        <section className="w-full flex flex-col items-center justify-center bg-background z-10 relative px-4 overflow-x-clip">
            <Separator />
            <div className="w-full flex items-center justify-between max-w-7xl my-4">
                <span className="font-heading uppercase text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]">
                    {t("sectionLabel")}
                </span>
                <span className="text-accent-foreground px-3 py-1 bg-secondary rounded-md">
                    {numberSection}
                </span>
            </div>
            <div className="flex flex-col items-center justify-between w-full">
                <div className="w-full">
                    <Ticker text={t("ticker")} />
                </div>
            </div>
            <div className="max-w-7xl w-full flex items-center justify-center relative z-10 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center max-w-5xl relative z-10">
                    {serviceItemKeys.map((key) => {
                        const Icon = SERVICE_ICONS[key];
                        return (
                            <Card
                                key={key}
                                className="min-h-[390px]  lg:min-h-[350px] md:max-w-[600px] backdrop-blur-xl bg-transparent"
                            >
                                <CardHeader>
                                    <div className="flex items-center justify-start">
                                        <span className=" bg-primary/90 p-4 lg:p-3 rounded-2xl">
                                            <Icon className="w-9 h-9 lg:w-13 lg:h-13 text-background" />
                                        </span>
                                    </div>
                                    <CardTitle className="text-[1.5rem] font-extralight mt-2">
                                        {t(`items.${key}.title`)}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        <p className="text-[1.05rem] font-inter">
                                            {t(`items.${key}.description`)}
                                        </p>
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
                <SpinningFigure
                    className="animate-none hidden md:block"
                    top="top-1/2 -translate-y-1/2"
                    right="left-1/2 -translate-x-1/2"
                    w="w-75 md:w-115 lg:w-140"
                    h="h-75 md:h-115 lg:h-140"
                    border="border-45 md:border-70 lg:border-90"
                    rounded="rounded-[110px] md:rounded-[170px] lg:rounded-[190px]"
                />
            </div>
            <div className="w-full flex flex-col gap-30 items-center justify-center px-4">
                <div className="w-full flex items-center justify-center gap-5">
                    <AnimatedButton className="px-5 py-3 text-[1rem]">{tc("contactSales")}</AnimatedButton>
                    <AnimatedLink href="/about" className="text-[1rem]">{tc("learnMore")}</AnimatedLink>
                </div>
                <div className="w-full max-w-5xl py-5">
                    <CTABanner
                        data={{
                            title: t("cta.title"),
                            cta_question: t("cta.question"),
                            cta: tc("contactSales"),
                        }}
                        className="bg-primary"
                    />
                </div>
            </div>
        </section>
    );
};
