import React from "react";
import avatarImg from "../../assets/portfolio-image.png";
import resume from "../../assets/AmitRoyResume 2025.pdf";
import TextChange from "../TextChange";

const Home = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "AmitRoyResume2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Senior Frontend Developer
          <p className="text-sm md:text-2xl tracking-tight">
            React.js, JavaScript, UI/UX Expert
          </p>
        </p>
        <button
          onClick={downloadResume}
          className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          My Resume
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
