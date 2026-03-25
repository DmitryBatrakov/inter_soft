export default async function BusinessSystemPage({params}: {params: Promise<{service: string}>}) {
    const {service} = await params;
    return (
        <div>
            Bussines System
        </div>
    )
}