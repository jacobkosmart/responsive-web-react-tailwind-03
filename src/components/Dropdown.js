import React from "react";
import { Link, NavLink } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-yellow-500 left-0 transition duration-1000 ease-out" : " -left-full hidden"} onClick={toggle}>
      <Link className="p-4" to="/">
        Home
      </Link>
      <NavLink className="p-4" activeClassName="selected" to="/menu">
        Menu
      </NavLink>
      <Link className="p-4" to="/about">
        About
      </Link>
      <Link className="p-4" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
