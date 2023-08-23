import { Dispatch, SetStateAction } from "react";

interface IDashContextType {
  token: string | null;
  restaurants: IRestaurant[];
  setRestaurants: Dispatch<SetStateAction<IRestaurant[]>>;
  searchList: IRestaurant[];
  setSearchList: Dispatch<SetStateAction<IRestaurant[]>>;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

interface IAddress {
  zipCode: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string | null;
}

interface IFood {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
  restaurantId: string;
}

interface IRestaurant {
  createdAt: string;
  id: string;
  name: string;
  phone: string;
  image: string;
  addressId: string;
  Address: IAddress;
  foods: IFood[];
}

export type { IDashContextType, IRestaurant, IFood };
