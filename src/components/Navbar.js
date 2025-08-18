import React from "react";
import navbarLogo from "../assets/image/navbar-logo.png";



const Navbar = () => (
    <>
  <nav className="flex items-center justify-between mb-40 container max-w-screen-xl mx-auto px-4 py-10 md:py-16">
    <img src={navbarLogo} alt="Logo" />
    <a
      href={require("../assets/resume/William Joe Resume (4).pdf")}
      download
      className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
    >
      Get my CV
    </a>
  </nav>
  </>
);

export default Navbar;
