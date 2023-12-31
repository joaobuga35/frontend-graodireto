/* eslint-disable no-empty */
import { createContext, useCallback, useEffect, useState } from "react";
import { IDashContextType, IRestaurant } from "./interfaces";
import { iContext } from "../UserContext/interfaces";
import api from "../../services/api";

const DashContext = createContext<IDashContextType>({} as IDashContextType);
const DashProvider = ({ children }: iContext) => {
  const token = localStorage.getItem("@TOKEN");
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [searchList, setSearchList] = useState<IRestaurant[]>([]);
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);
  const [filterRestaurants, setFilterRestaurants] = useState<IRestaurant[]>([]);

  const getRestaurants = useCallback(async () => {
    try {
      const response = await api.get<IRestaurant[]>("restaurants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRestaurants(response.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }, [token]);

  useEffect(() => {
    getRestaurants();
  }, [getRestaurants, restaurants]);
  return (
    <DashContext.Provider
      value={{
        token,
        restaurants,
        setRestaurants,
        searchList,
        setSearchList,
        input,
        setInput,
        modal,
        setModal,
        filterRestaurants,
        setFilterRestaurants,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export { DashProvider, DashContext };
