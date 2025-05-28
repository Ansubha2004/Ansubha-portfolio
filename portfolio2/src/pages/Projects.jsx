import React, { useState, useEffect } from "react";
import axios from "axios";
import Projectcard from "../components/Projectcard";

function Projects() {
  const [repo, setrepo] = useState([]);
  const token = import.meta.env.VITE_GITHUB_REST_API_TOKEN;

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/Ansubha2004/starred",
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      const data = await response.data;
      setrepo(data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);
  useEffect(() => {}, [repo]);

  return (
    <div
      id="Projects"
      className="w-full h-auto border-box sm:py-[60px] py-[40px] scroll-mt-[50px]  "
    >
      <div className="text-center">
        <p
          className="text-white font-bold text-[3rem] "
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          Project Samples
        </p>
        <p
          className="text-orange-500 text-[1rem] font-[700] sm:text-[1.2rem]"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          Full-Stack Solutions & Hands-On Implementations{" "}
        </p>
      </div>
      <div className="w-auto  h-auto sm:my-[50px] my-[30px] flex  gap-5 sm:gap-10  overflow-auto hide-scrollbar ">
        {repo.map((item, index) => (
          <Projectcard
            key={index}
            animation="fade-left"
            delay={index*400+700}
            deploy={item.homepage}
            github={item.html_url}
            name={item.name}
            description={item.description}
            topics={item.topics}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
