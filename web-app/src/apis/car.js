import axios from "../config/axios";

const carsApi = {};

carsApi.getAllCars = () => axios.get("/cars");

carsApi.addNewCar = (data) => axios.post("cars", data);

carsApi.updateCar = (id, data) => axios.patch(`${id}`, data);
carsApi.deleteCar = (id) => axios.delete(`${id}`);

export default carsApi;
