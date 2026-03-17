import React from "react";
import { motion } from "framer-motion";
import {
  SiMysql,
  SiPowerbi,
  SiTableau,
  SiPython
} from "react-icons/si";

import {
  FaReact,
  FaJs,
  FaGithub,
  FaFileExcel
} from "react-icons/fa";

const skills = [
  { name: "SQL", icon: <SiMysql color="#00758F" size={50} /> },
  { name: "Power BI", icon: <SiPowerbi color="#F2C811" size={50} /> },
  { name: "Tableau", icon: <SiTableau color="#E97627" size={50} /> },
  { name: "Excel", icon: <FaFileExcel color="#217346" size={50} /> },
  { name: "Python", icon: <SiPython color="#3776AB" size={50} /> },
  { name: "React", icon: <FaReact color="#61DAFB" size={50} /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={50} /> },
  { name: "GitHub", icon: <FaGithub color="#ffffff" size={50} /> },
];

const Skills = () => {
  return (
    <div
      id="Skills"
      className="bg-[#0f172a] text-white py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-10">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            className="bg-[#1e2331] p-6 rounded-2xl shadow-lg 
            flex flex-col items-center justify-center w-28 h-28
            transition-all duration-300 
            hover:scale-110 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {skill.icon}
            <p className="mt-2 text-sm">{skill.name}</p>
          </motion.div>

        ))}

      </div>
    </div>
  );
};

export default Skills;