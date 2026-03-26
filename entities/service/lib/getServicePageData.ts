import { landingPageData } from "../data/web-solutions/landing-page";
import { corporateWebsiteData } from "../data/web-solutions/corporate-website";
import { WebSolutionsPageData } from "../model/web-solutions/types";
import { webPortalsData } from "../data/web-solutions/web-portals";
import { saasPlatformsData } from "../data/software-products/saas-platforms";
import { SaaPlatformData } from "../model/software-products/types";


const webSolutionsDataMap: Record<string, WebSolutionsPageData> = {
    "landing-page": landingPageData,
    "corporate-website": corporateWebsiteData,
    "web-portals": webPortalsData,
}
export const getWebSolutionsPageData = (slug: string) => webSolutionsDataMap[slug] ?? null;


const softwareProductsDataMap: Record<string, SaaPlatformData> = {
    "saas-platforms": saasPlatformsData,
};
export const getSoftwareProductsPageData = (slug: string) => softwareProductsDataMap[slug] ?? null;