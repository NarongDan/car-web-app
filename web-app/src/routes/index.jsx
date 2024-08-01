import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import MainContainer from "../pages/MainContainer";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <MainContainer /> },
]);
export default function index() {
  return <RouterProvider router={router} />;
}
