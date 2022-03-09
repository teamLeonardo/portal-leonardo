import { service } from "service";
import styled from "styled-components";
import ReactHtmlParser from 'react-html-parser';
import { useEffect } from "react";
import { jsPhone } from "components/Iphone/Iphone";

const DivScroll = styled.div`
    .img-phone {
      display: flex;
    }
  `;
const Portafolio = ({ post }) => {

  //scrollIntoView
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
      {[...post].map((p, idx) => {
        return <section key={idx}>
          <h1>{p.title.rendered}</h1>
          <div className="cont-render">
            {ReactHtmlParser(p.content.rendered)}
          </div>
        </section>
      })}
    </DivScroll >
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const post = await service.portafolio.getQueryParrilla()

  // Pass data to the page via props
  return { props: { post } }
}
export default Portafolio
