import React from "react";
import Table from "./components/Table";
import { useCar } from "../../contexts/car-context";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function CarReport() {
  const { cars, isCarsLoading } = useCar();

  return (
    <div>
      {isCarsLoading && <LoadingSpinner />}
      <Table cars={cars} />
    </div>
  );
}
