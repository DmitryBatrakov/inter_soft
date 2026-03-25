export default async function IntegrationsPage({params}: {params: Promise<{service: string}>}) {
    const {service} = await params;
    return (
        <div>Integrations page</div>
    )
}