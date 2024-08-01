import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";

import navLinks from "./nav-links";
import Logo from "../assets/hauplogofor_web.webp";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClickLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col p-3 h-full">
      {/* head  */}
      <div className="flex items-center mb-3 text-gray-900 h-16">
        <img src={Logo} alt="Logo" />
      </div>
      <hr className="border-gray-300" />

      {/* nav body */}
      <ul className="flex flex-col mb-auto mt-8 gap-2">
        {navLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <li className="mb-2" key={index}>
              <Link
                to={item.path}
                className={`flex items-center w-full px-4 py-2 bg-gray-700 text-lg text-white font-semi rounded-md hover:bg-blue-500 transition duration-200
                  ${currentPath === item.path ? "!bg-blue-500" : ""}
                `}
              >
                {Icon && <Icon className="mr-2" />}
                {item.display}
              </Link>
            </li>
          );
        })}
      </ul>

      <hr className="border-gray-300 mt-2" />

      {/* log out */}
      <div
        className="flex mt-2 items-center cursor-pointer"
        onClick={handleClickLogout}
      >
        <RiLogoutCircleLine size={35} />
        <button className="ml-2 py-1.5 w-full rounded-md text-black text-lg hover:bg-red-400 hover:text-white">
          Logout
        </button>
      </div>
    </div>
  );
}
