import { ProjectWorkItem } from "../model/types";

export const dataWorkProcess: ProjectWorkItem = {
    title: "Project work sequence",
    tickerText: "Work process",
    description: [
        "We share the procedure of interaction with our clients so that you better understand what stages we go through with each of you.",
        "The most important thing for INTER SOFT is to be on the same wavelength with the client and to show a meticulous and individual approach to each challenge.",
        "We value your time and are responsible for meeting expectations.",
    ],
    steps: [
        {
            step: "01",
            title: "Initial contact and acquaintance",
            description:
                "We start our collaboration by discussing your needs and goals. This helps us understand exactly what your project should be and what tasks it should solve.",
        },
        {
            step: "02",
            title: "Receiving input data",
            description:
                "At this stage, you provide all the necessary information: business details, references, wishes for functionality and design. This forms the basis for further work.",
        },
        {
            step: "03",
            title: "Preparation of the technical task",
            description:
                "We create a detailed technical task that includes the structure, functionality and design of the project. The document is agreed with you before the start of work.",
        },
        {
            step: "04",
            title: "Signing a contract and receiving a subscription",
            description:
                "After approval of the technical task, we sign a contract fixing the terms of cooperation. Then the payment for the first stage of work is made.",
        },
        {
            step: "05",
            title: "Fulfillment of the order",
            description:
                "Our team implements the project in accordance with the approved technical task, paying attention to every detail. You receive regular updates on the progress of the work.",
        },
        {
            step: "06",
            title: "Product testing",
            description:
                "We conduct extensive testing to ensure that the product works flawlessly on all devices and meets your expectations.",
        },
        {
            step: "07",
            title: "Preparation of instructions for use",
            description:
                "After the development is complete, we provide a detailed user manual for your product so that you can easily operate it.",
        },
        {
            step: "08",
            title: "Transferring the project to PROD and submitting the work",
            description:
                "The finished product is transferred to the production server (PROD) and becomes available to users. We officially complete the project and hand it over to you.",
        },
    ],
    firstStep: {
        title: "The first step towards tangible changes",
        subtitle: [
            { text: "YOUR IDEA ", variant: "default" },
            { text: "DESERVES ", variant: "outline" },
            { text: "THE ", variant: "outline" },
            { text: "BEST IMPLEMENTATION", variant: "default", breakAfter: true },
            { text: "!", variant: "outline" },
            { text: " FILL OUT THE FORM ", variant: "default" },
            { text: "AND WE WILL", variant: "outline" },
            { text: " CONSULT FOR YOU.", variant: "default" },
        ],
    },
};
