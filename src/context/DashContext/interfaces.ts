interface IDashContextType {
  token: string | null;
  restaurants: IRestaurant[];
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

export type { IDashContextType, IRestaurant };
