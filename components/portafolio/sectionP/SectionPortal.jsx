import { useRouter } from 'next/router'
export const SectionPortal = ({ title, content, slug = null }) => {
    const router = useRouter()
    return <section>
        <h1>{title}</h1>
        <div
            className="cont-render"
            dangerouslySetInnerHTML={{ __html: content }}
        />
        {
            slug &&
            <div>
                <button type="button" onClick={() => {
                    router.push({ pathname: "/portafolio/" + slug })
                }} >ver mas</button>
            </div>
        }
    </section>
}