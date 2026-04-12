import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const ProjectCard = ({ title, description, github, image }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#1e2331] text-white" : "bg-white text-black"
      } p-6 flex flex-col w-80 rounded-2xl shadow-xl
      hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
      transition-all duration-300`}
    >
      {/* Image */}
      <img
        className="rounded-lg mb-4 h-40 w-full object-cover"
        src={image}
        alt="project"
      />

      {/* Content wrapper */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>

        <p
          className={`text-sm md:text-md py-3 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {description}
        </p>
      </div>

      <a
  href={github}
  target="_blank"
  rel="noopener noreferrer"
  className="relative text-white py-2 px-5 text-sm md:text-lg font-semibold rounded-3xl 
  bg-gradient-to-r from-blue-500 to-indigo-600 
  overflow-hidden 
  transition-all duration-300 
  hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] 
  w-full text-center"
>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 hover:opacity-20 blur-xl transition-all duration-300"></span>
  <span className="relative z-10">View Project</span>
</a>
    </div>
  );
};

export default ProjectCard;