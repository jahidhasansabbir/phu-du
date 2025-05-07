import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="navbar w-10/12 mx-auto">
      <div className="navbar-start">
        <NavLink to='/' >
        <div className="flex justify-center items-center gap-2">
          <img className="w-[48px] h-[48px]" src={logo} alt="" /> 
          <p className="text-3xl font-bold">Phudu</p>
        </div>
        </NavLink>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-lg" >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "border-b-2 rounded-none" : "rounded-none")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking"  className={({ isActive }) => (isActive ? "border-b-2 rounded-none" : "rounded-none")}> My-Bookings</NavLink>
          </li>
          <li>
            <NavLink to="/blogs"  className={({ isActive }) => (isActive ? "border-b-2 rounded-none" : "rounded-none")}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us"  className={({ isActive }) => (isActive ? "border-b-2 rounded-none" : "rounded-none")}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-full text-white bg-[#176AE5]">Emergency</a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
