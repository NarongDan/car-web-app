import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import { carStatus, fuelType } from "./option-value";
import { useCar } from "../../../contexts/car-context";

export default function UpdateCarForm({ car, setModal }) {
  const id = car.id || undefined;

  const { handleUpdateAndAddCar } = useCar();

  const [input, setInput] = useState({
    licensePlate: "",
    brand: "",
    model: "",
    color: "",
    fuelType: "",
    status: "",
    insurance: "",
    notes: "",
  });
  const [inputError, setInputError] = useState({
    licensePlate: "",
    brand: "",
    model: "",
    color: "",
    fuelType: "",
    status: "",
    insurance: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = await handleUpdateAndAddCar(id, input);

    if (message) {
      const errorMessage = message.errors
        ? message.errors.reduce((acc, err) => {
            acc[err.field] = err.message;
            return acc;
          }, {})
        : { [message.field]: message.message };

      setInputError((prev) => ({ ...prev, ...errorMessage }));
    } else setModal(false);
  };

  useEffect(() => {
    if (car) {
      setInput({
        licensePlate: car.licensePlate || "",
        brand: car.brand || "",
        model: car.model || "",
        color: car.color || "",
        fuelType: car.fuelType || "",
        status: car.status || "",
        insurance: car.insurance || "",
        notes: car.notes || "",
      });
    }
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">License Plate</label>
          <Input
            type="text"
            name="licensePlate"
            value={input.licensePlate}
            error={inputError.licensePlate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Brand</label>
          <Input
            type="text"
            name="brand"
            value={input.brand}
            error={inputError.brand}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Model</label>
          <Input
            type="text"
            name="model"
            value={input.model}
            error={inputError.model}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Color</label>
          <Input
            type="text"
            name="color"
            value={input.color}
            error={inputError.color}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fuel Type</label>
          <select
            name="fuelType"
            value={input.fuelType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="" disabled>
              Select Fuel Type
            </option>
            {fuelType?.map((type, index) => (
              <option value={`${type}`} key={index}>{`${type}`}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            name="status"
            value={input.status}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="" disabled>
              Select Status
            </option>

            {carStatus?.map((status, index) => (
              <option value={`${status}`} key={index}>{`${status}`}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Insurance</label>
          <Input
            type="text"
            name="insurance"
            value={input.insurance}
            error={inputError.insurance}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Notes</label>
          <Textarea
            name="notes"
            value={input.notes}
            error={inputError.notes}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          ></Textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}