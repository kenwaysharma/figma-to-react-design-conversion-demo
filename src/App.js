import logo from "./logo.svg";
import bellicon from "./bellicon.svg";

import { Link, NavLink, Outlet } from "react-router-dom";

const routes = [
  { path: "cart", label: "Cart" },
  { path: "market", label: "Market" },
  { path: "settings", label: "Settings" },
  { path: "logout", label: "Logout" },
];

function App() {
  return (
    <div className="container bg-[#D9D9D9] min-h-screen min-w-full flex flex-col md:flex-row gap-[5px] ">
      <div className="flex flex-col gap-[5px] min-w-[320px]">
        <NavLink to={""}>
          <div className=" h-[200px] bg-white flex justify-center items-center hover:bg-blue-200 transition ease-in-out delay-150">
            <img src={logo} alt="Logo" />
          </div>
        </NavLink>

        {routes.map((route) => {
          return (
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              <div className="h-[143px] bg-white flex justify-center items-center hover:bg-blue-200 transition ease-in-out delay-150 ">
                <h3 className="text-[18px]">{route.label}</h3>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div className="w-full flex flex-col gap-y-[5px]">
        <div className="min-h-[47px] bg-white py-[30px] px-[50px] flex justify-between">
          <button className="py-[17px] px-[31px] bg-blue-600 text-white hover:bg-blue-800 transition ease-in-out delay-150">
            Complete Profile
          </button>
          <img src={bellicon} alt="Logo" />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default App;
