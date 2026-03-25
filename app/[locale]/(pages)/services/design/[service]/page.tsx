export default async function DesignPage({params}: {params: Promise<{service: string}>}) {
    const {service} = await params;
    return (
        <div>Design page</div>
    )
}