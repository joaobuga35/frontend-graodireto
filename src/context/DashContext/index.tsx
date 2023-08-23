import { createContext, useEffect, useState } from "react";
import { IDashContextType, IRestaurant } from "./interfaces";
import { iContext } from "../UserContext/interfaces";
import api from "../../services/api";

const DashContext = createContext<IDashContextType>({} as IDashContextType);
const DashProvider = ({ children }: iContext) => {
  const token = localStorage.getItem("@TOKEN");
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const getRestaurants = async () => {
    try {
      const response = await api.get<IRestaurant[]>("restaurants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setRestaurants(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   async function getUser() {
  //     try {
  //       let decoded: any = jwt_decode(token);
  //       let idUser: string = decoded.sub;
  //       const response = await api.get<IContacts>(`clients/${idUser}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setUser(response.data.name);
  //     } catch (error) {}
  //   }
  useEffect(() => {
    getRestaurants();
  }, [token]);

  return (
    <DashContext.Provider value={{ token, restaurants }}>
      {children}
    </DashContext.Provider>
  );
};

export { DashProvider, DashContext };
