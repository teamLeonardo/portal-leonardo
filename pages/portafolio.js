import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const DivScroll = styled.div`
    .img-phone {
      display: flex;
    }
  `;
const Portafolio = ({ pagina }) => {

  //scrollIntoView
  let [currentCart, setCurrentCart] = useState(0);
  const cartLista = Array.from({ length: 4 }).fill("a");
  const currentImgRef = useRef(null)
  const divPadre = useRef(null)
  useEffect(() => {
    if (divPadre && pagina) {
      const newNode = document.createElement('div');
      divPadre.current.appendChild(newNode)
      newNode.outerHTML = pagina
    }
  }, [])
  return (
    <DivScroll ref={divPadre}>


    </DivScroll >
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const { URL } = process.env
  const res = await fetch(`${URL}/api/pagina`)
  const pagina = await res.text()

  // Pass data to the page via props
  return { props: { pagina } }
}
export default Portafolio
