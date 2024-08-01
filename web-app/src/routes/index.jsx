import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import MainContainer from "../pages/MainContainer";
import CarReport from "../features/CarManagement/CarReport";
import AddNewCar from "../features/CarManagement/AddNewCar";
import CarContextProvider from "../contexts/car-context";
import ProtectRoute from "../features/authentication/ProtectRoute";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ProtectRoute>
        <CarContextProvider>
          <MainContainer />
        </CarContextProvider>
      </ProtectRoute>
    ),
    children: [
      { path: "/", element: <CarReport /> },
      { path: "/addCar", element: <AddNewCar /> },
    ],
  },
]);
export default function index() {
  return <RouterProvider router={router} />;
}
