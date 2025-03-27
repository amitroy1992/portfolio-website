import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-[#465697] text-white p-10 md:p-12 flex flex-col"
    >
      {/* Main Content - Contact & Links */}
      <div className="flex justify-between items-center">
        {/* Left Side - Heading */}
        <div>
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">
            Feel Free To Reach Out!
          </h3>
        </div>

        {/* Right Side - Contact Links */}
        <ul className="text-sm md:text-xl space-y-2">
          <li className="flex gap-2 items-center">
            <MdOutlineEmail size={20} />
            <a href="mailto:amitroy1992@gmail.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
              amitroy1992@gmail.com
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <CiLinkedin />
            <a href="https://www.linkedin.com/in/amit-roy-101a60111/" className="hover:underline" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/amit-roy-101a60111/
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <FaGithub />
            <a href="https://github.com/amitroy1992" className="hover:underline" target="_blank" rel="noopener noreferrer">
              github.com/amitroy1992
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright Section - Centered */}
      <div className="text-xs md:text-sm text-center mt-6 opacity-75">
        © {new Date().getFullYear()} Amit Roy. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
