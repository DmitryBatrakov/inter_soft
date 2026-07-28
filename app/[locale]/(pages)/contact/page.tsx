import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations("ContactPage");
    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-2xl font-bold text-white">{t("title")}</p>
        </div>
    )
}
