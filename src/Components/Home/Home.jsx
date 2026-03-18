import React from "react";
import resume from "../../assets/Amit_Roy_Final_ATS_Resume.pdf";
import TextChange from "../TextChange";

const Home = () => {

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Amit_Roy_Data_Analyst_Resume_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-between items-center px-6 md:px-20 py-10 md:py-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 md:pt-10 text-center md:text-left z-10">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          <TextChange />
        </h1>

        <p className="text-sm md:text-2xl tracking-tight text-blue-400">
          SQL | Power BI | Tableau | Excel | Data Analytics
        </p>

        <p className="text-sm md:text-lg text-gray-300 mt-4">
          Helping businesses make data-driven decisions through dashboards, analytics, and insights.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start items-center">

          <button
            onClick={downloadResume}
            className="w-full sm:w-[200px] text-center whitespace-nowrap 
            text-white py-3 text-sm md:text-lg font-semibold rounded-full 
            bg-gradient-to-r from-blue-500 to-indigo-500 
            transition-all duration-300 
            hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            Download Resume
          </button>

          <a
            href="#Projects"
            className="w-full sm:w-[200px] text-center whitespace-nowrap 
            text-white py-3 text-sm md:text-lg font-semibold rounded-full 
            bg-gradient-to-r from-blue-500 to-indigo-500 
            transition-all duration-300 
            hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            View Projects
          </a>

          <a
            href="#Contact"
            className="w-full sm:w-[200px] text-center whitespace-nowrap 
            text-white py-3 text-sm md:text-lg font-semibold rounded-full 
            bg-gradient-to-r from-blue-500 to-indigo-500 
            transition-all duration-300 
            hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            Hire Me
          </a>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-10 md:mt-0 z-10">
        <img 
          src={`${import.meta.env.BASE_URL}dashboards/profile_pic.jpeg`}
          alt="profile"
          className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
        />
      </div>

    </div>
  );
};

export default Home;