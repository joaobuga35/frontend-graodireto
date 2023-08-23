/* eslint-disable @typescript-eslint/no-explicit-any */
import ButtonDefault from "../../styles/button";
import { DivImageModal, DivInfosModal, LiCardModal } from "./styles";

const CardModal = ({ food }: any) => {
  return (
    <>
      <LiCardModal key={food.id} id={food.id}>
        <DivImageModal>
          <img src={food.image} alt={food.name} />
        </DivImageModal>
        <DivInfosModal>
          <h2>{food.name}</h2>
          <span>{food.description}</span>
          <p>R$ {food.price}</p>
          <ButtonDefault colorBtn={"buttonGreen"} width={"106px"}>
            {" "}
            Comprar
          </ButtonDefault>
        </DivInfosModal>
      </LiCardModal>
    </>
  );
};

export default CardModal;
