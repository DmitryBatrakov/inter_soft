import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { Inter, Rubik } from "next/font/google";
import { ThemeProvider } from "@/shared/providers/theme-provider/theme-provider";
import { Header } from "@/widgets/header/Header";
import { routing } from "@/i18n/routing";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const russoOne = localFont({
    src: "../../lib/fonts/RussoOne-Regular.ttf",
    variable: "--font-russo-one",
});

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["hebrew", "latin"],
});

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();
    const dir = locale === "he" ? "rtl" : "ltr";

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <body
                className={`${inter.variable} ${russoOne.variable} ${rubik.variable} antialiased relative`}
            >
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem={true}
                        disableTransitionOnChange
                    >
                        <Header />
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
