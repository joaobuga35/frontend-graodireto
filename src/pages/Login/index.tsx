import { Link } from "react-router-dom";
import FormStyle from "../../components/Form/styles";
import Input from "../../components/Input";
import DivInputBox from "../../components/Input/styles";
import ButtonDefault from "../../styles/button";
import { DivLogin } from "./styles";
import { useMediaQuery } from "react-responsive";
import Logo from "../../components/Logo";

const Login = () => {
  const isWide = useMediaQuery({ minWidth: 1000 });
  return (
    <DivLogin>
      <FormStyle noValidate width={isWide ? "42rem" : "35rem"} height={"46rem"}>
        <Logo />
        <h3>Login</h3>
        <DivInputBox>
          <Input type={"email"} id={"email"} placeholder={"email"} />
        </DivInputBox>
        <DivInputBox>
          <Input type={"password"} id={"password"} placeholder={"senha"} />
        </DivInputBox>
        <ButtonDefault type="submit" colorBtn={"buttonGreen"} width={"100%"}>
          Logar
        </ButtonDefault>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link className="redirectedBtn" to={"/register"}>
          Cadastrar
        </Link>
      </FormStyle>
    </DivLogin>
  );
};

export default Login;
