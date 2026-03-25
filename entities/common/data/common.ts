import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { TechnologiesData } from "../model/type";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";

export const technologiesData: TechnologiesData = {
    label: "technologies",
    description: "We use the latest and greatest technologies to build your project",
    items: [
        {
            title: "React",
            icon: GrReactjs,
        },
        {
            title: "Next.js",
            icon: SiNextdotjs,
        },
        {
            title: "Tailwind CSS",
            icon: RiTailwindCssFill,
        },
        {
            title: "TypeScript",
            icon: SiTypescript,
        },
        {
            title: "Node.js",
            icon: RiNodejsLine,
        }
    ],
}