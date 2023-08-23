import { Link } from "react-router-dom";
import { DivHeader, DivInput, HeaderMain, SearchInput } from "./styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "../Logo";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { AiOutlineSearch } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { DashContext } from "../../context/DashContext";
import { IFood, IRestaurant } from "../../context/DashContext/interfaces";

const HeaderDash = () => {
  const { remove } = useContext(UserContext);
  const isWide = useMediaQuery({ minWidth: 768 });
  const [show, setShow] = useState(false);
  const { setSearchList, restaurants, setInput, input } =
    useContext(DashContext);

  const searchFilter = (input: string, restaurants: IRestaurant[]) => {
    setSearchList(
      restaurants.filter((elem: IRestaurant) => {
        if (!input) {
          return elem;
        } else {
          return (
            elem.name.toLowerCase().includes(input.toLowerCase()) ||
            elem.foods.some((food: IFood) =>
              food.name.toLowerCase().includes(input.toLowerCase())
            ) ||
            elem.foods.some((food: IFood) =>
              food.description.toLowerCase().includes(input.toLowerCase())
            )
          );
        }
      })
    );
  };
  return (
    <DivHeader>
      {isWide ? (
        <HeaderMain>
          <Logo />
          <div className="divIcons">
            <DivInput>
              <SearchInput
                onChange={(e) => {
                  e.preventDefault(),
                    setInput(e.target.value),
                    searchFilter(e.target.value, restaurants);
                }}
                value={input}
                placeholder="Digite sua pesquisa..."
              />
              <span
                onClick={() => {
                  setSearchList([]), setInput("");
                }}
              >
                X
              </span>
            </DivInput>
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
          <DivInput show={show}>
            <SearchInput
              onChange={(e) => {
                e.preventDefault(),
                  setInput(e.target.value),
                  searchFilter(e.target.value, restaurants);
              }}
              value={input}
              show={show}
              placeholder="Digite sua pesquisa..."
            />
            <span
              onClick={() => {
                setSearchList([]), setInput("");
              }}
            >
              X
            </span>
          </DivInput>
        </>
      )}
    </DivHeader>
  );
};

export default HeaderDash;
