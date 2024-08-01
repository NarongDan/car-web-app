import { TiDocumentText } from "react-icons/ti";
import { IoCarOutline } from "react-icons/io5";

const navLinks = [
  {
    path: "/",
    icon: TiDocumentText,
    display: "Car Report",
  },
  { path: "/addCar", icon: IoCarOutline, display: "Add New Car" },
];

export default navLinks;
