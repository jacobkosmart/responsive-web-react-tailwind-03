import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ toggle, isOpen }) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
      <Link to="/" className="pl-8">
        EGG
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </div>

      <div className="pr-8 md:block hidden">
        <NavLink exact className="p-4 hover:text-red-800" activeClassName="selected" to="/">
          Home
        </NavLink>
        <NavLink className="p-4" activeClassName="selected" to="/menu">
          Menu
        </NavLink>
        <NavLink className="p-4" activeClassName="selected" to="/about">
          About
        </NavLink>
        <NavLink className="p-4" activeClassName="selected" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
