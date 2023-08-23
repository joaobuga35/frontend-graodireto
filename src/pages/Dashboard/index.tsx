import { useContext } from "react";
import Card from "../../components/Card";
import HeaderDash from "../../components/Header";
import { DivTitleDashboard, List, MainDashboard } from "./styles";
import { DashContext } from "../../context/DashContext";

const Dashboard = () => {
  const { restaurants } = useContext(DashContext);
  return (
    <>
      <HeaderDash />
      <MainDashboard>
        <DivTitleDashboard>
          <h1>Restaurantes</h1>
          <p>
            Encontre o melhor restaurante para o seu gosto, tudo em um só lugar!
          </p>
        </DivTitleDashboard>
        <List>
          {restaurants.map((elem) => (
            <Card restaurant={elem} />
          ))}
        </List>
      </MainDashboard>
    </>
  );
};

export default Dashboard;
