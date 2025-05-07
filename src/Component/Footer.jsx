import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#FFFFFF] text-base-content rounded p-10 gap-y-7">
      <NavLink to="/">
        <div className="flex justify-center items-center gap-2">
          <img className="w-[48px] h-[48px]" src={logo} alt="" />
          <p className="text-3xl font-bold">Phudu</p>
        </div>
      </NavLink>
      <nav className="grid grid-flow-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 rounded-none" : "rounded-none"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            isActive ? "border-b-2 rounded-none" : "rounded-none"
          }
        >
          {" "}
          My-Bookings
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "border-b-2 rounded-none" : "rounded-none"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? "border-b-2 rounded-none" : "rounded-none"
          }
        >
          Contact Us
        </NavLink>
      </nav>
      <div className="h-0.5 w-10/12 border-b-2 border-[#0F0F0F33] "></div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/jahid_sabbir1">
          <FaXTwitter size={25}/>
          </a>
          <a href="https://www.instagram.com/jahid__hasan__sabbir/#">
          <AiFillInstagram size={25}/>
          </a>
          <a href="https://www.linkedin.com/in/jahid-hasan-sabbir-035ab2290/">
          <FaLinkedin size={25}/>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
