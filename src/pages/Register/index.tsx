import { Link } from "react-router-dom";
import FormStyle from "../../components/Form/styles";
import Input from "../../components/Input";
import DivInputBox from "../../components/Input/styles";
import ButtonDefault from "../../styles/button";
import { DivRegister } from "./styles";
import Logo from "../../components/Logo";
import { useMediaQuery } from "react-responsive";

const Register = () => {
  const isWide = useMediaQuery({ minWidth: 1000 });
  return (
    <DivRegister>
      <FormStyle noValidate width={isWide ? "48rem" : "35rem"} height={"51rem"}>
        <Logo />
        <div className="divInfoRegister">
          <h3>Cadastro</h3>
          <Link className="redirectedLogin" to={"/"}>
            Retornar para o login
          </Link>
        </div>
        <DivInputBox>
          <Input id={"name"} type={"text"} placeholder={"nome"} />
        </DivInputBox>
        <DivInputBox>
          <Input id={"email"} type={"email"} placeholder={"email"} />
        </DivInputBox>
        <DivInputBox>
          <Input id={"password"} type={"password"} placeholder={"senha"} />
        </DivInputBox>
        <DivInputBox>
          <Input
            id={"confirmPassword"}
            type={"password"}
            placeholder={"confirme sua senha"}
          />
        </DivInputBox>
        <ButtonDefault type="submit" colorBtn={"buttonGreen"} width={"100%"}>
          Cadastrar
        </ButtonDefault>
      </FormStyle>
    </DivRegister>
  );
};

export default Register;
