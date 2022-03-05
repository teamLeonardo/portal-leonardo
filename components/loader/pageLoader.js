import styled from "styled-components";
import { useTheme } from "../../context/theme";

const ContainerLoader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  background: var(--theme-color-01);
  color: var(--theme-color-04);

  .container {
    filter: url("#gooey");
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .liquid-1 {
    position: relative;
  }

  span {
    letter-spacing: 10px;
    font-size: 8rem;
    font-weight: bold;
  }

  .drop {
    position: absolute;
    background: var(--theme-color-04);
    width: 22px;
    height: 22px;
    border-radius: 60% 70% 50% 60% / 65% 66% 60% 65%;
    animation: 6s move ease infinite;
  }

  .drop:after {
    width: 17px;
    height: 17px;
    content: "";
    position: absolute;
    background: var(--theme-color-04);
    border-radius: 50% 60% 60% 70% / 60% 65% 65% 65%;
    left: 25px;
    top: 3px;
    animation: 6s drop_effect ease infinite;
  }

  svg {
    position: absolute;
  }

  @keyframes move {
    0%,
    100% {
      transform: translate(370px);
    }

    50% {
      transform: translate(-370px);
    }
  }

  @keyframes drop_effect {
    0% {
      left: 0px;
    }
    5% {
      left: 35px;
    }
    45% {
      left: 0px;
    }
    50% {
      left: 0px;
    }
    55% {
      left: -30px;
    }
    95% {
      left: 0px;
    }
    100% {
      left: 0;
    }
  }
`;

export const PageLoader = () => {
  const { theme } = useTheme();

  return (
    <ContainerLoader className="container-main" data-bg={theme}>
      <div className="container">
        <span>LOADING</span>
        <span className="drop"></span>
      </div>

      <svg>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -20"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
    </ContainerLoader>
  );
};
