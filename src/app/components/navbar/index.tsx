import { sections } from "@/app/utils/constants";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="h-screen min-w-[60px] border-r">
      <div className="navbar flex flex-col gap-5 text-gray-500 fixed bg-white h-screen z-50">
        <button className="grid place-items-center pt-5 text-2xl">
          <input id="menu" type="checkbox" />

          <label htmlFor="menu">
            <GiHamburgerMenu />
          </label>
        </button>

        <div>
          {sections.map((i, key) => (
            <NavLink item={i} key={key} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
