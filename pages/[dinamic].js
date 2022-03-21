import { useRouter } from "next/router"

export default () => {
    const { query: { dinamic } } = useRouter()
    return <div>
        ruta dinamica {dinamic}
    </div>
}
export async function getServerSideProps() {

    return { props: {} }
}