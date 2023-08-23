import { DivImage, DivInfos, LiCard } from "./styles";
import ButtonDefault from "../../styles/button";

const Card = ({ restaurant }: any) => {
  return (
    <>
      <LiCard key={restaurant.id} id={restaurant.id}>
        <DivImage>
          <img src={restaurant.image} alt="image" />
        </DivImage>
        <DivInfos>
          <h2>{restaurant.name}</h2>
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
