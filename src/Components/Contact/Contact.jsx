import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="bg-[#0f172a] text-white py-20 px-6 md:px-20 text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Let's Work Together 🚀
      </h2>

      <p className="text-gray-400 text-md md:text-lg mb-8">
        I'm open to Data Analyst / Power BI roles and collaborations.
      </p>

      {/* CTA BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">

        <a
          href="mailto:amitroy1992@gmail.com"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 
          font-semibold transition-all duration-300 
          hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
        >
          Hire Me
        </a>

        <a
          href="mailto:amitroy1992@gmail.com"
          className="px-6 py-3 rounded-full border border-blue-400 
          font-semibold transition-all duration-300 
          hover:bg-blue-500 hover:text-white hover:scale-105"
        >
          Email Me
        </a>

      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-6 mb-6">

        <a
          href="mailto:amitroy1992@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-3xl p-4 rounded-full bg-[#1e2331] 
          hover:scale-110 transition-all duration-300 
          hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        >
          <MdEmail />
        </a>

        <a
          href="https://linkedin.com/in/amit-roy-101a60111"
          target="_blank"
          rel="noreferrer"
          className="text-3xl p-4 rounded-full bg-[#1e2331] 
          hover:scale-110 transition-all duration-300 
          hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/amitroy1992"
          target="_blank"
          rel="noreferrer"
          className="text-3xl p-4 rounded-full bg-[#1e2331] 
          hover:scale-110 transition-all duration-300 
          hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        >
          <FaGithub />
        </a>

      </div>

      
    </div>
  );
};

export default Contact;