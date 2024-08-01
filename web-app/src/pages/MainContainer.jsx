import { Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";

export default function MainContainer() {
  return (
    <div className="flex h-screen">
      <div className="w-[200px]">
        <Sidebar />
      </div>
      <div className="w-[calc(100%-200px)] bg-gray-100 overflow-auto ">
        <Outlet />
      </div>
    </div>
  );
}
