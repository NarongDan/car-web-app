import axios from "../config/axios";

const carsApi = {};

carsApi.getAllCars = () => axios.get("/cars");

carsApi.addNewCar = (data) => axios.post("/cars", data);

carsApi.updateCar = (id, data) => axios.patch(`cars//${id}`, data);
carsApi.deleteCar = (id) => axios.delete(`/cars/${id}`);

export default carsApi;
