import { Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";

export default function MainContainer() {
  return (
    <div className="flex h-screen">
      <div className="w-[230px]">
        <Sidebar />
      </div>
      <div className="w-[calc(100vw-230px)] p- bg-gray-100 ">
        <Outlet />
      </div>
    </div>
  );
}
