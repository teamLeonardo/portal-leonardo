import { useEffect, useRef } from "react";
import gsap from "gsap/all";
import CustomEase from "gsap/CustomEase";
import { CustomBounce } from "gsap-trial/CustomBounce";
import { SplitText } from "gsap-trial/SplitText";
import styled from "styled-components";
const Letra = styled.div`
  margin-top: 1rem;
  display: flex;
  color: var(--theme-color-02);
  text-shadow: 0.08em 0.05em 0em #626262;
  letter-spacing: 0.15em;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Bungee", cursive;
  font-weight: 900;
  font-size: calc(2vw + 1rem);
`;
export const TitleContentBlog = () => {
  const el = useRef();

  useEffect(() => {
    gsap.registerPlugin(CustomEase, CustomBounce, SplitText);

    CustomBounce.create("myBounce", {
      strength: 0.6,
      squash: 3.5,
      squashID: "myBounce-ease"
    });

    const splitText = new SplitText(el.current).chars;

    const timeline = gsap
      .timeline({
        defaults: { duration: 1.5, stagger: { amount: 0.1, ease: "sine.in" } }
      })
      .from(
        splitText,
        {
          duration: 0.6,
          opacity: 0,
          ease: "power1.inOut"
        },
        0
      )
      .from(
        splitText,
        {
          y: -300,
          ease: "myBounce"
        },
        0
      )
      .to(
        splitText,
        {
          scaleX: 1.35,
          scaleY: 0.45,
          rotate: () => 20 - 30 * Math.random(),
          ease: "myBounce-ease",
          transformOrigin: "50% 50%"
        },
        0
      );
  }, []);
  return <Letra ref={el}>Mi Primer Bloog</Letra>;
};
