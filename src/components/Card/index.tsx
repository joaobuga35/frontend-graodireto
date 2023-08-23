import { DivImage, DivInfos, LiCard } from "./styles";
import ButtonDefault from "../../styles/button";
import { useContext } from "react";
import { DashContext } from "../../context/DashContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ restaurant }: any) => {
  const { setModal, restaurants, setFilterRestaurants } =
    useContext(DashContext);

  const filterAll = (id: string) => {
    const oneRestaurant = restaurants.filter((elem) => elem.id === id);
    setFilterRestaurants(oneRestaurant);
  };
  return (
    <>
      <LiCard key={restaurant.id} id={restaurant.id}>
        <DivImage>
          <img src={restaurant.image} alt="image" />
        </DivImage>
        <DivInfos>
          <h2>{restaurant.name}</h2>
          <ButtonDefault
            id={restaurant.id}
            onClick={() => {
              filterAll(restaurant.id), setModal(true);
            }}
            colorBtn={"buttonGreen"}
            width={"106px"}
          >
            {" "}
            Ver detalhes
          </ButtonDefault>
        </DivInfos>
      </LiCard>
    </>
  );
};

export default Card;
