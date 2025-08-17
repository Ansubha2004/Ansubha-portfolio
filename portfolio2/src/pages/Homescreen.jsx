import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Socialmediaicon from "../components/socialmedia.jsx";
import Button from "../components/Button.jsx";
import profilepic from "../assets/images/profilepic.png";
import useAOS from "../hooks/useAOS.jsx";

function Homescreen() {
  const socialMedia = [
    { comp: FaInstagram, href: "https://www.instagram.com/rikstar_bro/" },
    { comp: FaGithub, href: "https://github.com/Ansubha2004" },
    {
      comp: FaLinkedin,
      href: "https://www.linkedin.com/in/ansubha-dhar-856176296/",
    },
  ];

  const viewpdf = () => {
    setTimeout(() => {
      window.open("/resume.pdf", "_blank");
    }, 1000);
  };

  useAOS();

  return (
    <div
      id="Home"
      className="w-full  min-h-screen border-box  pt-[110px] sm:pb-[50px] pb-[25px]   z-[2] flex items-center sm:gap-0 gap-10 sm:items-center sm:justify-between sm:flex-row flex-col "
    >
      <section
        id="intro"
        className="w-full sm:w-auto min-h-full flex flex-col z-[0] justify-center items-center sm:items-start "
      >
        <p
          data-aos="fade-right"
          data-aos-anchor="#Home"
          data-aos-delay="0"
          data-aos-mirror="true"
          className="text-[#707070] text-[1.3rem] sm:text-[1.5rem] "
        >
          Hi viewers!
        </p>
        <p
          data-aos="fade-right"
          data-aos-anchor="#Home"
          data-aos-delay="100"
          data-aos-mirror="true"
          className="text-[#959595] text-[1.4rem] sm:text-[1.6rem] font-[500]"
        >
          Welcome to my Portfolio, I am
        </p>
        <p
          data-aos="fade-right"
          data-aos-anchor="#Home"
          data-aos-delay="200"
          data-aos-mirror="true"
          className=" sm:text-[3.9rem] mt-2 sm:mt-0 mb-3  text-[3.2rem] bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-transparent bg-clip-text font-[900]"
        >
          ANSUBHA DHAR
        </p>
        <div
          data-aos="fade-up"
          data-aos-anchor="#Home"
          data-aos-delay="500"
          data-aos-mirror="true"
          className="flex justify-center items-center mb-10 space-x-7 sm:space-x-10"
        >
          {socialMedia.map((Icon, index) => (
            <Socialmediaicon
              key={index}
              Component={Icon.comp}
              href={Icon.href}
            />
          ))}
        </div>
        <div className="flex space-x-7 mb-10 sm:mb-[60px]">
          <Button
            content="Contact Us"
            delay="700"
            animation="fade-up"
            handleClick={() => {
              const section = document.getElementById("Contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            themecss="btn-orange"
          />
          <Button
            content="Download CV"
            handleClick={viewpdf}
            themecss="btn-black "
            delay="700"
            animation="fade-up"
          />
        </div>
        <div
          data-aos="fade"
          data-aos-anchor="#Home"
          data-aos-delay="1200"
          data-aos-mirror="true"
          className="w-[90%] sm:w-full h-[100px]  sm:h-[20%] rounded-[15px] bg-[#FFFFFF10] border-box py-[20px] flex justify-between items-center"
        >
          <div className="w-1/3 flex flex-col justify-center h-full border-solid border-r-[2px] border-[#959595] border-box pl-[5%]  ">
            <p className="text-[#FD6F00] text-[1.7rem] font-[800]">1+</p>
            <p className="text-[#DFDFDF] text-[1.2rem] font-[800]">
              Experience
            </p>
          </div>
          <div className="w-1/3 flex flex-col justify-center h-full border-solid border-r-[2px] border-[#959595] border-box pl-[5%] ">
            <p className="text-[#FD6F00] text-[1.7rem] font-[800]">10+</p>
            <p className="text-[#DFDFDF] text-[1.2rem] font-[800]">Projects</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center h-full border-box pl-[5%]  ">
            <p className="text-[#FD6F00] text-[1.7rem] font-[800]">400+</p>
            <p className="text-[#DFDFDF] text-[1.2rem] font-[800]">LinkedIn</p>
          </div>
        </div>
      </section>

      <section
        id="myimage"
        data-aos="fade"
        data-aos-delay="200"
        data-aos-mirror="true"
        className="rounded-[50%] aspect-square sm:min-w-[600px] z-[1] right-0  bg-[#FFFFFF10] relative flex justify-center items-end overflow-hidden "
      >
        <img
          data-aos="zoom-in-up"
          data-aos-delay="400"
          data-aos-mirror="true"
          src={profilepic}
          className="h-[100%] translate-x-[-1rem]"
        />
      </section>
    </div>
  );
}

export default Homescreen;
