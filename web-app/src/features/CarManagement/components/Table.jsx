import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { LuWrench } from "react-icons/lu";
import { useCar } from "../../../contexts/car-context";
import Modal from "../../../components/Modal";
import UpdateCarForm from "./UpdateCarForm";

export default function Table({ cars }) {
  const [modal, setModal] = useState(false);
  const [carToUpdate, setCarToUpdate] = useState(null);

  const { handleRemove } = useCar();

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div className="p-4">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="w-[25px] px-3 py-2">No.</th>
              <th className="w-2/12 px-4 py-2">License Plate</th>
              <th className="w-2/12 px-4 py-2">Brand</th>
              <th className="w-2/12 px-4 py-2">Model</th>
              <th className="w-1/12 px-4 py-2">Color</th>
              <th className="w-2/12 px-4 py-2">Fuel Type</th>
              <th className="w-1/12 px-4 py-2">Status</th>
              <th className="w-1/12 px-4 py-2">Insurance</th>
              <th className="w-2/12 px-4 py-2">Notes</th>
              <th className="w-1/12 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars?.map((car, index) => (
              <tr
                key={car.id}
                className={`${index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"}`}
              >
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-center">
                  {car.licensePlate}
                </td>
                <td className="border px-4 py-2 text-center">{car.brand}</td>
                <td className="border px-4 py-2 text-center">{car.model}</td>
                <td className="border px-4 py-2 text-center">{car.color}</td>
                <td className="border px-4 py-2 text-center">{car.fuelType}</td>
                <td
                  className={`border px-4 py-2 text-center ${
                    car.status === "Available"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {car.status}
                </td>
                <td className="border px-4 py-2 text-center">
                  {car.insurance}
                </td>
                <td className="border px-4 py-2 text-center">{car.notes}</td>
                <td className="border px-4 py-2 text-center">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="bg-green-300 rounded-md p-2 hover:bg-green-500"
                      onClick={() => {
                        setModal(true);
                        setCarToUpdate(car);
                      }}
                    >
                      <LuWrench />
                    </button>
                    <button
                      type="button"
                      className="bg-red-300 rounded-md p-2 hover:bg-red-500"
                      onClick={() => handleRemove(car.id)}
                    >
                      <MdOutlineDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal  */}
      <Modal open={modal} onClose={closeModal} title="Update Car">
        <UpdateCarForm car={carToUpdate} setModal={setModal} />
      </Modal>
    </>
  );
}
