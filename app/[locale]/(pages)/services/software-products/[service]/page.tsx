export default async function SoftwareProductsPage({params}: {params: Promise<{service: string}>}) {
    const {service} = await params;

    return (
        <div>Software Products page</div>
    )
}