import React, { useState, useRef } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Button from "./Button";
import navmenu from "../assets/images/navmenu.png";
import { ImCross } from "react-icons/im";

function Navbar() {
  //js
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setTimeout(() => {
      const newState = !isOpen;
      navRef.current.style.display = newState ? "flex" : "none";
      setIsOpen(newState);
    }, 500);
  };

  return (
    <nav
      data-aos="fade"
      data-aos-delay="300"
      className="fixed  flex justify-between items-center w-[90%] z-[2] h-[80px] sm:h-[100px] pt-1 backdrop-blur-lg  bg-[#121212]/80"
    >
      <img src={logo} className="object-contain h-[45%] sm:h-[60%]" />
      <ul
        ref={navRef}
        className="sm:w-auto sm:h-auto w-screen h-full hidden sm:flex justify-evenly sm:justify-center items-center sm:gap-15 z-[2] sm:relative absolute sm:left-auto left-[-5%] sm:bg-transparent bg-[#121212]/80 sm:backdrop-blur-none backdrop-blur-md "
      >
        <li className="transform active:scale-[0.9] ">
          <a
            onClick={() => {
              const section = document.getElementById("Home");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={clsx("Navlink ")}
          >
            Home
          </a>
        </li>
        <li className="transform active:scale-[0.9] ">
          <a
            onClick={() => {
              const section = document.getElementById("About");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={clsx("Navlink")}
          >
            About Me
          </a>
        </li>
        <li className="transform active:scale-[0.9] ">
          <a
            onClick={() => {
              const section = document.getElementById("Skills");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={clsx("Navlink")}
          >
            Skills
          </a>
        </li>
        <li className="transform active:scale-[0.9] ">
          <a
            onClick={() => {
              const section = document.getElementById("Projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={clsx("Navlink")}
          >
            Projects
          </a>
        </li>
        <li className="sm:hidden">
          <ImCross
            onClick={toggleMenu}
            className="text-[#FD6F00] transition-all linear duration-200 active:scale-[1.5]"
          />
        </li>
      </ul>
      <div className="flex items-center h-full ">
        <Button
          content="Contact Us"
          handleClick={() => {
            const section = document.getElementById("Contact");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          themecss="btn-orange"
        />
        <img
          onClick={toggleMenu}
          src={navmenu}
          className="sm:hidden ml-5 h-[40%] active:bg-[#FD6F0070] active:scale-[0.8] rounded-[5px] transition-all duration-200 linear rotate-180 z-[1]"
        />
      </div>
    </nav>
  );
}

export default Navbar;
