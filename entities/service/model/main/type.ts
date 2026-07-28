import { IconType } from "react-icons";
import { CtaData } from "../software-products/types";

export type ServiceMainItem = {
    icon: IconType;
    title: string;
    description: string;
}

export type ServiceMainData = {
    label: string;
    items: ServiceMainItem[];
    cta: CtaData;
}