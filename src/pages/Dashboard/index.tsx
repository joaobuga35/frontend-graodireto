import Card from "../../components/Card";
import HeaderDash from "../../components/Header";
import { DivTitleDashboard, MainDashboard } from "./styles";

const Dashboard = () => {
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
        <ul>
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </MainDashboard>
    </>
  );
};

export default Dashboard;
