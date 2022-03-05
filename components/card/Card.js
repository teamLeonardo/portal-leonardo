import styled from "styled-components";
import calculadora from "../../assets/calculadora.png";
const CartStyled = styled.div`
  min-width: 100%;
  /* border: 1px solid var(--theme-color-05); */
  border-radius: 6px;
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  .cartImg {
    position: relative;
    width: 100%;
    cursor: zoom-in;
    img {
      border-radius: 7px;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .cartText {
    border-radius: 7px;
    padding: 1rem;
    background-color: var(--theme-color-01);

    .cartTitle {
      font-size: 27px;
      text-transform: capitalize;
      word-break: normal;
      line-height: 1.25;
      font-weight: 600;
      font-weight: bold;
      color: var(--theme-color-02);
    }
    .cartDescription {
      color: var(--theme-color-03);
      text-transform: capitalize;
      font-weight: 600 !important;
      font-size: 16px !important;
      margin-bottom: 8px;
      white-space: pre-wrap;
    }
  }
`;
const Letra = styled.div`
  display: flex;
  color: var(--theme-color-02);
  text-shadow: 0.08em 0.05em 0em #626262;
  letter-spacing: 0.15em;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Bungee", cursive;
  font-weight: 100;
  font-size: calc(2vw + 1rem);
`;
export const Card = (props) => {
  return (
    <CartStyled {...props}>
      <div className="cartText">
        <div className="cartTitle">
          <Letra>calculadora</Letra>
        </div>
        <div className="cartImg">
          <img srcSet={calculadora} alt="cart text" />
        </div>
        <div className="cartDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          veritatis? Et, accusamus. Architecto quis unde eligendi similique
          deleniti! Deserunt sed voluptatem eius ut ea rem temporibus voluptate
          reiciendis sapiente inventore? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellat corrupti, consequuntur cupiditate molestiae
          labore voluptatibus quos ducimus id pariatur esse, quae, libero
          corporis ipsum minima? Error nesciunt nulla dolore ratione. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Enim modi earum,
          quis ut quam nobis eaque quidem quia saepe cumque ipsam laborum
          cupiditate eum molestias est corporis! Cumque, quaerat provident.
          Provident sequi, excepturi reprehenderit nihil officia assumenda
          labore accusamus est architecto. Omnis, provident! Ipsa quas illo
          nulla ratione veritatis reiciendis sint sunt consequuntur, asperiores
          at repudiandae odio laborum illum quo! Sapiente ut, laboriosam tempore
          nam repellat ipsum nulla. Rerum minus modi soluta dicta sint ratione
          perferendis deserunt voluptatem vitae ipsam. Iure autem ut a molestias
          ab unde dolor mollitia cum? Consequuntur officia autem quidem ex
          <br />
          <br />
          possimus excepturi fugit provident labore quaerat eveniet sapiente
          dolor reiciendis, optio sint. Dolore repellendus ullam facere, animi
          at odit quasi obcaecati perspiciatis ipsa exercitationem vel? Ab, nam
          temporibus at odit tenetur eligendi vel sequi vitae eius beatae
          blanditiis cum non adipisci minima maiores unde illo porro laborum
          deserunt ea accusantium ducimus. Pariatur rem vel obcaecati. Sequi
          sint tenetur suscipit itaque sunt, cum molestiae deserunt vero iure a
          reiciendis cupiditate odit quas veritatis numquam deleniti quo saepe
          repellat natus illo ullam id eum. Voluptatibus, similique officia.
          Distinctio veniam totam vero itaque ratione corporis tempora beatae
          voluptate dolorem, optio aliquam molestiae natus eligendi! Quibusdam
          sint ducimus, cum nostrum quo beatae nesciunt dolores inventore
          accusantium aliquid neque ea. Aut perspiciatis optio cupiditate esse
          fugiat ab iusto mollitia facilis eaque voluptatum ea repudiandae
          itaque, qui quos, exercitationem aliquam maiores veniam nostrum nobis?
          Enim possimus labore, corporis ab quia odio! Veritatis et
          necessitatibus aliquid voluptate? Facere voluptatum veniam quisquam!
          Voluptatem ex id, quo alias beatae ducimus dicta! Officiis incidunt
          eum repellat excepturi voluptas accusamus sequi, dicta vitae ipsa
          nihil et. Laborum voluptates eaque delectus sequi ea beatae
          repudiandae quam dolorem laboriosam placeat officia quisquam ad
          voluptate repellendus in, tempore error commodi veritatis ab
          cupiditate. Ducimus laboriosam deleniti ipsam voluptates! Maxime!
        </div>
      </div>
    </CartStyled>
  );
};
