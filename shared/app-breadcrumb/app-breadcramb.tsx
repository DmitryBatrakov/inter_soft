import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export const AppBreadcrumb = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <Breadcrumb className="absolute top-25 left-0 z-20">
            <BreadcrumbList>
                {breadcrumbs.map((crumb, i) => (
                    <React.Fragment key={crumb.href}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={crumb.href} className="font-inter font-medium hover:text-primary text-[0.9rem]">
                                {crumb.label}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {i < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};
