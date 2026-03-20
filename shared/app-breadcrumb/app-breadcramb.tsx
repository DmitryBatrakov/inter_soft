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
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map((crumb, i) => (
                    <React.Fragment key={crumb.href}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={crumb.href}>
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
