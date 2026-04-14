import React from "react";
import { motion } from "framer-motion";

import {
  SiMysql,
  SiPowerbi,
  SiTableau,
  SiPython,
  SiPandas,
  SiNumpy,
  SiOpenai,
  SiJira
} from "react-icons/si";

import {
  FaFileExcel,
  FaGithub,
  FaChartBar,
  FaRobot
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Data Analytics",
    skills: [
      { name: "SQL", icon: <SiMysql color="#00758F" size={40} /> },
      { name: "Python", icon: <SiPython color="#3776AB" size={40} /> },
      { name: "Pandas", icon: <SiPandas color="#150458" size={40} /> },
      { name: "NumPy", icon: <SiNumpy color="#013243" size={40} /> },
      { name: "Excel", icon: <FaFileExcel color="#217346" size={40} /> },
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      { name: "Power BI", icon: <SiPowerbi color="#F2C811" size={40} /> },
      { name: "Tableau", icon: <SiTableau color="#E97627" size={40} /> },
      { name: "DAX", icon: <FaChartBar color="#60A5FA" size={40} /> },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Cleaning", icon: <FaChartBar size={35} /> },
      { name: "EDA", icon: <FaChartBar size={35} /> },
      { name: "Statistics", icon: <FaChartBar size={35} /> },
      { name: "Data Modeling", icon: <FaChartBar size={35} /> },
      { name: "KPI Analysis", icon: <FaChartBar size={35} /> },
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      { name: "GitHub", icon: <FaGithub color="#ffffff" size={40} /> },
      { name: "ChatGPT", icon: <SiOpenai color="#10A37F" size={40} /> },
      { name: "Claude", icon: <FaRobot color="#8B5CF6" size={40} /> },
      { name: "Gemini", icon: <FaRobot color="#4285F4" size={40} /> },
      { name: "Copilot", icon: <FaRobot color="#22C55E" size={40} /> },
      { name: "JIRA", icon: <SiJira color="#0052CC" size={40} /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      id="Skills"
      className="bg-[#0f172a] text-white py-16 px-6 md:px-20"
    >
      <p className="text-center text-gray-400 mb-4">
        Tools I use to transform data into business insights
      </p>

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="space-y-12">

        {skillCategories.map((category, i) => (
          <div key={i}>

            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-400 text-center">
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1e2331] p-5 rounded-xl shadow-lg 
                  flex flex-col items-center justify-center w-24 h-24
                  hover:scale-110 transition duration-300 
                  hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"

                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {skill.icon}
                  <p className="mt-2 text-xs">{skill.name}</p>
                </motion.div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Skills;