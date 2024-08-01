import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import MainContainer from "../pages/MainContainer";
import CarReport from "../features/CarManagement/CarReport";
import AddNewCar from "../features/CarManagement/AddNewCar";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <CarReport /> },
      { path: "/addCar", element: <AddNewCar /> },
    ],
  },
]);
export default function index() {
  return <RouterProvider router={router} />;
}
