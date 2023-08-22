import { Link } from "react-router-dom";
import { DivHeader, HeaderMain, SearchInput } from "./styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "../Logo";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { AiOutlineSearch } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const HeaderDash = () => {
  const { remove } = useContext(UserContext);
  const isWide = useMediaQuery({ minWidth: 768 });
  const [show, setShow] = useState(false);
  return (
    <DivHeader>
      {isWide ? (
        <HeaderMain>
          <Logo />
          <div className="divIcons">
            <SearchInput placeholder="Digite sua pesquisa..." />
            <Link to={"/"} onClick={() => remove()}>
              <ExitToAppIcon className="icons" />
            </Link>
          </div>
        </HeaderMain>
      ) : (
        <>
          <HeaderMain>
            <Logo />
            <div className="divIcons">
              <AiOutlineSearch
                onClick={() => setShow(!show)}
                className="icons"
              />
              <Link to={"/"} onClick={() => remove()}>
                <ExitToAppIcon className="icons" />
              </Link>
            </div>
          </HeaderMain>
          <SearchInput show={show} placeholder="Digite sua pesquisa..." />
        </>
      )}
    </DivHeader>
  );
};

export default HeaderDash;
