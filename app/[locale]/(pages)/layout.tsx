"use client";

import { AppBreadcrumb } from "@/shared/app-breadcrumb/app-breadcramb";
import { Footer } from "@/widgets/footer/Footer";

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto hidden md:block relative">
                <AppBreadcrumb />
            </div>
            <div>{children}</div>
            <Footer />
        </div>
    );
}
