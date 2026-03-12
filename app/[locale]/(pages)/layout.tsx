import { Footer } from "@/widgets/footer/Footer";

export default function PagesLayout( {children}: {children: React.ReactNode}) {
    return (
        <div>
            <div>{children}</div>
            <Footer />
        </div>
    )
}