import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CarContextProvider from "../contexts/car-context";
import ProtectRoute from "../features/authentication/ProtectRoute";
import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"));
const MainContainer = lazy(() => import("../pages/MainContainer"));
const CarReport = lazy(() => import("../features/CarManagement/CarReport"));
const AddNewCar = lazy(() => import("../features/CarManagement/AddNewCar"));

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
