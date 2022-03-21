import styled from "styled-components";
import { useEffect, useState } from "react";
import { jsPhone } from "components/Iphone/Iphone";
import { SectionPortal } from "components/portafolio/sectionP/SectionPortal";
import { client } from "apollo";
import { querys } from "apollo";

const DivScroll = styled.div`
    .img-phone {
      display: flex;
    }
  `;
const Portafolio = ({ post: ssrPost }) => {

    //scrollIntoView
    const [post, setPost] = useState(ssrPost)
    useEffect(() => {
        if (post) {
            const attrPhone = document.querySelectorAll(".attr-phone")
            attrPhone.forEach((de) => {
                const parent = de.parentNode
                const p_prime = de.cloneNode(true);
                parent.appendChild(jsPhone(p_prime))
                if (parent) {
                    parent.removeChild(de)
                }
            })
        }
    }, [post])
    return (
        <DivScroll >
            {[...post].map(({ node: p }, idx) => {
                return <SectionPortal key={idx} title={p.title} content={p.content} slug={p.slug} />
            })}
        </DivScroll >
    );
};

export async function getServerSideProps() {
    // Fetch data from external API
    const { posts } = (await client.query({ query: querys.POST_PORTAFOLIO })).data
    // Pass data to the page via props
    return { props: { post: posts.edges } }
}
export default Portafolio
