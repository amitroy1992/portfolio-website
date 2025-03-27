import React from "react";
import AboutImg from "../../assets/portfolio-image-about.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
  <h1 className="text-xl md:text-2xl font-semibold leading-normal text-blue-400">
    Frontend Developer
  </h1>
                <p className="text-sm md:text-md leading-tight">
                As a Frontend Developer, I built responsive web platforms like Zing Up Life using Node.js, Express, and MongoDB, focusing on seamless integration and performance optimization.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-blue-400">
                  React developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a React Developer, I built dynamic SPAs with React, Redux, and Material UI, enhancing front-end performance and creating scalable applications while ensuring quality with Jest.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-blue-400">
                  UI developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a UI Developer, I crafted intuitive user interfaces for apps like NAB BPE Mini, using GraphQL and Azure Cosmos DB, ensuring an exceptional user experience with a keen eye for design.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
