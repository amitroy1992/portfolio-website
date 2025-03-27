import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const projectLinks = {
  "KF Assess 3.0": "https://www.kornferry.com/capabilities/talent-suite-hcm-software/korn-ferry-assess",
  "Metlife RIS Data Store": "https://www.metlife.com/retirement-and-income-solutions/",
  "NAB BPE Mini App": "https://www.nab.com.au/personal/online-banking/mobile-banking-app",
  "Zing Up Life": "https://www.zing.coach/"
};

const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 ">
        <a
          href={projectLinks[title] || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
