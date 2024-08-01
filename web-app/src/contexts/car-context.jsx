import React, { createContext, useContext, useEffect, useState } from "react";
import carsApi from "../apis/car";

const CarContext = createContext();

export default function CarContextProvider({ children }) {
  const [cars, setCars] = useState(null);

  const fetchCars = async () => {
    try {
      const carsRes = await carsApi.getAllCars();

      setCars(carsRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return <CarContext.Provider value={{ cars }}>{children}</CarContext.Provider>;
}

export function useCar() {
  return useContext(CarContext);
}
