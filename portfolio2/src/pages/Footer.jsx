import React from "react";
import logo from "../assets/images/logo.png";
import clsx from "clsx";
import Socialmediaicon from "../components/socialmedia.jsx";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import mail from "../assets/images/mail.png";
import phone from "../assets/images/phone.png";

function Footer() {
  const socialMedia = [
    { comp: FaInstagram, href: "https://www.instagram.com/rikstar_bro/" },
    { comp: FaGithub, href: "https://github.com/Ansubha2004" },
    {
      comp: FaLinkedin,
      href: "https://www.linkedin.com/in/ansubha-dhar-856176296/",
    },
  ];

  return (
    <div className="w-screen bg-[#FFFFFF12] h-auto border-box px-[5%] relative left-[-5.5%] flex flex-col items-center py-7 ">
      <img src={logo} className="object-contain w-[30%] sm:w-[15%]" alt="" />
      <ul className="sm:w-[55%] w-full  flex justify-around  my-5 items-center  bg-transparent  ">
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
        <li className="transform active:scale-[0.9] ">
          <a
            onClick={() => {
              const section = document.getElementById("Contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={clsx("Navlink")}
          >
            Contact Me
          </a>
        </li>
      </ul>
      <div className="flex justify-center items-center mt-2 mb-5 space-x-7 sm:space-x-10">
        {socialMedia.map((Icon, index) => (
          <Socialmediaicon key={index} Component={Icon.comp} href={Icon.href} />
        ))}
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-center items-center text-[#959595] sm:gap-7 gap-2">
        <a
          href="mailto:ansubhadhar2012@gmail.com"
          className="font-[500] text-[1.1rem] flex items-center hover:text-orange-500 active:text-[orange]-500 transition-all duration-100 linear active:scale-[0.9] space-x-3 "
        >
          <img src={mail} alt="" className="object-contain w-7 " />
          <p>ansubhadhar2012@gmail.com</p>
        </a>
        <a
          href="tel:+917439865604"
          className="font-[500] text-[1.1rem] flex items-center hover:text-orange-500 active:text-[orange]-500 transition-all duration-100 linear active:scale-[0.9] space-x-3 "
        >
          <img src={phone} alt="" className="object-contain w-7 " />
          <p>+91 7439865604</p>
        </a>
      </div>
      <p className="w-full sm:w-[55%] text-center mt-10 pt-3 border-solid text-[#959595] border-t-[1px]">
        Developed by @Ansubha Dhar
      </p>
    </div>
  );
}

export default Footer;
