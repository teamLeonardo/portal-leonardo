import { client, querys } from "apollo"
import { SectionPortal } from "components/portafolio/sectionP/SectionPortal"
import { useRouter } from 'next/router'

export default ({ data, error }) => {

  const { push } = useRouter()
  if (error && error.type === 404) {
    push("/404")
    return null;
  }
  return !error && data && <SectionPortal title={data.title} content={data.content} />
}
export async function getServerSideProps({ query }) {
  if (query && query.slug) {
    const { data } = await client.query({ query: querys.POST_PORTAFOLIO_BY_SLUG, variables: { slug: "" + query.slug } })
    if (data && data.postBy === null) return { props: { error: { text: "pagina no encontrada", type: 404 } } }
    return { props: { data: data.postBy } }
  }
}