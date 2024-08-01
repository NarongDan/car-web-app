import React, { createContext, useContext, useEffect, useState } from "react";
import carsApi from "../apis/car";
import Swal from "sweetalert2";
import { AxiosError } from "axios";

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

  const handleRemove = async (id) => {
    try {
      const button = await Swal.fire({
        text: "Are you sure to remove this car?",
        title: "Remove",
        icon: "question",
        showCancelButton: true,
        showConfirmButton: true,
      });

      if (button.isConfirmed) {
        const res = await carsApi.deleteCar(id);

        if (res.status === 200) {
          Swal.fire({
            title: "Remove",
            text: "Remove success",
            icon: "success",
            timer: 1000,
          });

          fetchCars();
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  const handleUpdateAndAddCar = async (id, data) => {
    try {
      if (id) {
        await carsApi.updateCar(id, data);
        Swal.fire({
          title: "Update Car",
          text: "Update Success",
          icon: "success",
          timer: 1000,
        });
      } else {
        await carsApi.addNewCar(data);

        Swal.fire({
          title: "Add New Car",
          text: "New Car Added",
          icon: "success",
          timer: 1000,
        });
        return { text: "new car added" };
      }

      fetchCars();
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response.data;
        return message;
      }
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <CarContext.Provider value={{ cars, handleRemove, handleUpdateAndAddCar }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCar() {
  return useContext(CarContext);
}
