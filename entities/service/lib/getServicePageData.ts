// import { businessCardData } from "../data/websites/business-card-site";
import { landingPageData } from "../data/websites/landing-page";
import { onlineStoreData } from "../data/websites/online-store";
import { corporateWebsiteData } from "../data/websites/corporate-website";
import { ServicePageData } from "../model/types";


const serviceDataMap: Record<string, ServicePageData> = {
    // "business-card": businessCardData,
    "landing-page": landingPageData,
    "online-store": onlineStoreData,
    "corporate-website": corporateWebsiteData,
}

export const getServicePageData = (slug: string): ServicePageData | null => {
    return serviceDataMap[slug] ?? null;
}