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
    <div className="flex w-full justify-between items-center p-10 md:p-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
<div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
<div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>
      {/* LEFT CONTENT */}
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">

        <h1 className="text-3xl md:text-6xl font-bold mb-6 text-white leading-tight">
          <TextChange />
        </h1>

        <p className="text-sm md:text-2xl tracking-tight text-blue-400">
          SQL | Power BI | Tableau | Excel | Data Analytics
        </p>

        <p className="text-sm md:text-lg text-gray-300 mt-4">
  Helping businesses make data-driven decisions through dashboards, analytics, and insights.
</p>

        <div className="mt-6 flex gap-4 justify-center md:justify-start">

    
 <button
  onClick={downloadResume}
  className="relative text-white py-2 px-5 text-sm md:text-lg font-semibold rounded-3xl 
  bg-gradient-to-r from-blue-500 to-indigo-600 
  overflow-hidden 
  transition-all duration-300 
  hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 hover:opacity-20 blur-xl transition-all duration-300"></span>
  <span className="relative z-10">View Resume</span>
</button>

<a
  href="#Projects"
  className="ml-4 relative text-white py-2 px-5 text-sm md:text-lg font-semibold rounded-3xl 
  bg-gradient-to-r from-blue-500 to-indigo-600 
  overflow-hidden 
  transition-all duration-300 
  hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 hover:opacity-20 blur-xl transition-all duration-300"></span>
  <span className="relative z-10">View Projects</span>
</a>

<a
  href="mailto:amitroy1992@gmail.com"
  className="ml-4 relative text-white py-2 px-5 text-sm md:text-lg font-semibold rounded-3xl 
  bg-gradient-to-r from-blue-500 to-indigo-600 
  overflow-hidden 
  transition-all duration-300 
  hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 hover:opacity-20 blur-xl transition-all duration-300"></span>
  <span className="relative z-10">Hire Me</span>
</a>
        </div>

      </div>

      {/* RIGHT IMAGE (YOUR PROFILE PIC) */}
      <div className="hidden md:flex justify-center items-center">
  <img 
    src={`${import.meta.env.BASE_URL}dashboards/profile_pic.jpeg`}
    alt="profile"
    className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
  />
</div>

    </div>
  );
};

export default Home;
