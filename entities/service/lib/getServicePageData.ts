import { landingPageData } from "../data/web-solutions/landing-page";
import { corporateWebsiteData } from "../data/web-solutions/corporate-website";
import { ServicePageData } from "../model/web-solutions/types";
import { webPortalsData } from "../data/web-solutions/web-portals";


const webSolutionsDataMap: Record<string, ServicePageData> = {
    "landing-page": landingPageData,
    "corporate-website": corporateWebsiteData,
    "web-portals": webPortalsData,
}

export const getWebSolutionsPageData = (slug: string) => webSolutionsDataMap[slug] ?? null;

const softwareProductsDataMap: Record<string, ServicePageData> = {};

export const getSoftwareProductsPageData = (slug: string) => softwareProductsDataMap[slug] ?? null;