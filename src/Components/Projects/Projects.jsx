import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      title: "Roy's Kitchen Power BI Dashboard",
      description:
        "Power BI dashboard analyzing restaurant sales including revenue trends, customer orders, and top selling items.",
      github: "https://github.com/amitroy1992/roys-kitchen-powerbi-dashboard",
      image: "dashboards/roys-kitchen-dashboard.png",
    },
    {
    title: "Loan Approval Analysis Dashboard",
      description:
        "End-to-end data analytics project analyzing loan approval patterns using SQL, Python, and Power BI to derive actionable insights.",
      github: "https://github.com/amitroy1992/loan-data-analysis-dashboard",
      image: "dashboards/loan-data-analysis-dashboard.png",
    },
    {
      title: "Retail Sales Power BI Dashboard",
      description:
        "Interactive Power BI dashboard analyzing retail sales performance across countries, products, and customer segments.",
      github: "https://github.com/amitroy1992/powerbi-retail-sales-dashboard",
      image: "dashboards/retail-dashboard.png",
    },
    {
      title: "Tata Data Visualization Dashboard",
      description:
        "Tableau dashboard analyzing retail sales data created as part of Tata Data Visualization simulation.",
      github: "https://github.com/amitroy1992/tata-data-visualization-dashboard",
      image:  "dashboards/tableau-dashboard.png",
    },
    {
      title: "BCG Marketing Campaign Analysis",
      description:
        "Marketing campaign performance analysis project completed during BCG Forage simulation with data-driven insights.",
      github: "https://github.com/amitroy1992/bcg-data-for-decision-makers",
      image: "dashboards/bcg-dashboard.png",
    },
    {
      title: "Data Analyst Portfolio Website",
      description:
        "Personal portfolio website built using React.js and Tailwind CSS to showcase projects, experience, and skills.",
      github: "https://github.com/amitroy1992/portfolio-website",
      image: "dashboards/Data-Analyst-Isometric-Illustration.jpg",
    },
  ];

  return (
    <div
      id="Projects"
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      } p-10 md:p-24 transition-all`}
    >

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projects
      </h1>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8">

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            github={project.github}
            image={project.image}
          />
        ))}

      </div>

    </div>
  );
};

export default Projects;