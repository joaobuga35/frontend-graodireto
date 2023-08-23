import { DivImage, DivInfos, LiCard } from "./styles";
import ButtonDefault from "../../styles/button";
import { IRestaurant } from "./interfaces";

const Card = ({ name, image }: IRestaurant) => {
  return (
    <>
      <LiCard>
        <DivImage>
          <img src={image} alt="image" />
        </DivImage>
        <DivInfos>
          <h2>{name}</h2>
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
