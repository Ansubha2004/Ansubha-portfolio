import React, { useState } from "react";
import form from "../data/formparameters.json";
import Button from "../components/Button.jsx";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { successmessage, errormessage } from "../utils/notification.js";
import useAOS from "../hooks/useAOS.jsx";

function Contact() {
  useAOS();
  //form handling

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    subject:"",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const shallowcopy = { ...formdata };
    shallowcopy[name] = value;
    setformdata(shallowcopy);
  };
  const handlesubmit = async (e) => {
    e.preventDefault(); //prevemt auto form reloads
    const { name, email, subject, message } = formdata;
    if (
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      errormessage("Kindly fill all the credentials");
      console.log("Kindliy fill all the credentials");
    }
    try {
      const response = await axios.post(
        "http://localhost:5900/api/contact",
        formdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true
        }
      );
      const { success, message, error } = response.data;
      if (success) {
        console.log("Data posted successfully");
        successmessage("Thanks for contacting! Will reach out to you soon ");
        // ✅ Reset form data here
        setformdata({
          name: "",
          email: "",
          subject:"",
          message: "",
        });
      }
      if (error) {
        errormessage("Glitch occured");
        console.log("Error occured while data posting");
      }
    } catch (err) {
      console.log("API fetch error", err);
    }
  };

  return (
    <div
      id="Contact"
      className="w-full h-auto border-box sm:pb-[40px] pb-[60px]   scroll-mt-[120px]  flex flex-col items-center "
    >
      <div className="text-center">
        <p
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="text-white font-bold text-[3rem] "
        >
          Contact Me
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className="text-orange-500 text-[1rem] font-[700] sm:text-[1.2rem]"
        >
          Let's Build Something Great Together
        </p>
      </div>
      <div className="w-full sm:w-1/2 my-10 ">
        <form
          data-aos="zoom-in-up"
          data-aos-delay={500}
          onSubmit={handlesubmit}
          className="flex flex-col items-center  "
        >
          {form.map((data, index) => (
            <input
              onChange={handlechange}
              key={data.id}
              type={data.type}
              className="h-[50px] outline-none  w-full  border-box px-7 mb-7 rounded-[7px] text-white placeholder-[#959595] bg-[#FFFFFF12]"
              name={data.name}
              placeholder={data.placeholder}
              value={formdata[data.name]}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
            />
          ))}

          <Button content="Submit" type="submit" themecss="btn-black mt-3" />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
