import Card from "../../components/Card";
import HeaderDash from "../../components/Header";
import { DivTitleDashboard, List, MainDashboard } from "./styles";

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
        <List>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </List>
      </MainDashboard>
    </>
  );
};

export default Dashboard;
