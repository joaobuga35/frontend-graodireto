/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DivImageAndAddress,
  ListFood,
  ModalContainer,
  ModalWrapper,
  TitleModal,
} from "./styles";
import { DashContext } from "../../context/DashContext";
import { useContext } from "react";
import CardModal from "../CardModal";

const Modal = () => {
  const { setModal, filterRestaurants } = useContext(DashContext);

  return (
    <ModalWrapper>
      <ModalContainer>
        <TitleModal>
          <h2>{filterRestaurants[0].name}</h2>
          <span onClick={() => setModal(false)}>X</span>
        </TitleModal>
        <DivImageAndAddress>
          <img src={filterRestaurants[0].image} alt="" />
          <p>
            {filterRestaurants[0].Address.street},{" "}
            {filterRestaurants[0].Address.number}
            <span>Telefone: {filterRestaurants[0].phone}</span>
          </p>
        </DivImageAndAddress>
        <ListFood>
          {filterRestaurants[0].foods.map((elem) => (
            <CardModal key={elem.id} food={elem} />
          ))}
        </ListFood>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
