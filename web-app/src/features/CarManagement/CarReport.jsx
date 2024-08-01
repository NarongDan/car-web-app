import React from "react";
import Table from "./components/Table";
import { useCar } from "../../contexts/car-context";

export default function CarReport() {
  const { cars } = useCar();
  return (
    <div>
      <Table cars={cars} />
    </div>
  );
}
