import { DivImage, DivInfos, LiCard } from "./styles";
import image from "../../assets/restaurante.jpg";
import ButtonDefault from "../../styles/button";

const Card = () => {
  return (
    <>
      <LiCard>
        <DivImage>
          <img src={image} alt="image" />
        </DivImage>
        <DivInfos>
          <h2>Cozinha do joão</h2>
          <ButtonDefault colorBtn={"buttonGreen"} width={"106px"}>
            {" "}
            Ver detalhes
          </ButtonDefault>
        </DivInfos>
      </LiCard>
    </>
  );
};

export default Card;
