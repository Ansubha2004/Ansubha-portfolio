import React from "react";
import Button from "../components/Button";
import downloadicon from "../assets/images/downloadicon.png";
import useAOS from "../hooks/useAOS.jsx";

function About() {
  const viewpdf = () => {
    setTimeout(() => {
      window.open("/resume.pdf", "_blank");
    }, 1000);
  };

  useAOS();

  return (
    <div
      id="About"
      className="w-full h-auto sm:py-[60px] py-[25px] scroll-mt-[100px]"
    >
      <div className="text-center">
        <p
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="text-white font-bold text-[3rem] "
        >
          About Me
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-mirror="true"
          className="text-orange-500 text-[1rem] font-[700] sm:text-[1.2rem]"
        >
          MERN Developer | Electrical Undergraduate | IEM, Kolkata
        </p>
      </div>
      <div className="text-center space-y-8">
        <p
          data-aos="fade"
          data-aos-delay="700"
          className="text-white text-[1.2rem] sm:text-[1.7rem] font-[500] mt-10  text-justify"
        >
          I'm a passionate MERN stack developer with a strong focus on building
          dynamic and responsive web applications. Currently pursuing a B.Tech
          in Electrical Engineering at IEM, Kolkata, I have demonstrated
          academic excellence and developed hands-on experience in circuit
          design, sensors, and IoT-based systems. My proficiency in JavaScript,
          React, Node.js, and MongoDB enables me to build scalable, full-stack
          solutions. I actively engage in collaborative projects and hackathons
          to apply my skills in real-world scenarios, and I seek out internships
          and freelance opportunities to further grow as a developer and
          problem-solver.
        </p>
        <Button
          content="Download CV"
          delay="900"
          animation="zoom-out"
          themecss="btn-orange py-[0.9rem] px-[1.7rem]"
          icon={downloadicon}
          handleClick={viewpdf}
          iconcss="w-7 inline mr-3"
        />
      </div>
    </div>
  );
}

export default About;
