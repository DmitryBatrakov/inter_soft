import { IconType } from "react-icons";

export type TechnologiesItem = {
    title: string;
    icon: IconType;
}

export type TechnologiesData = {
    label: string;
    description: string;
    items: TechnologiesItem[];
}
