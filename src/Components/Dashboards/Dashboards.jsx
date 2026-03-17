import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const dashboards = [
  {
    title: "Roy's Kitchen Power BI Dashboard",
    description:
      "Power BI dashboard analyzing restaurant sales including revenue trends and top selling items.",
    image: "/dashboards/roys-kitchen-dashboard.png",
  },
  {
    title: "Retail Sales Power BI Dashboard",
    description:
      "Interactive Power BI dashboard analyzing retail sales across products and customer segments.",
    image: "/dashboards/retail-dashboard.png",
  },
  {
    title: "Tata Data Visualization Dashboard",
    description:
      "Tableau dashboard analyzing retail sales data created during Tata simulation.",
    image: "/dashboards/tableau-dashboard.png",
  },
  {
    title: "BCG Marketing Campaign Analysis",
    description:
      "Marketing campaign performance analysis dashboard built during BCG simulation.",
    image: "/dashboards/bcg-dashboard.png",
  },
];

const Dashboards = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="Dashboards"
      className={`${
        theme === "dark" ? "bg-[#0f172a] text-white" : "bg-white text-black"
      } py-16 px-6 md:px-20`}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Dashboard Gallery
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {dashboards.map((item, index) => (
          <div
            key={index}
            className={`${
              theme === "dark"
                ? "bg-[#1e2331] text-white"
                : "bg-white text-black"
            } p-6 w-80 rounded-2xl shadow-xl flex flex-col
            hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 
            transition-all duration-300`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg mb-4 h-40 w-full object-cover"
            />

            {/* Content Wrapper */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold">{item.title}</h3>

              <p
                className={`text-sm py-3 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {item.description}
              </p>
            </div>

            <a
  href="#"
  className="relative text-white py-2 px-5 text-sm md:text-lg font-semibold rounded-3xl 
  bg-gradient-to-r from-blue-500 to-indigo-600 
  overflow-hidden 
  transition-all duration-300 
  hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] 
  w-full text-center"
>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 hover:opacity-20 blur-xl transition-all duration-300"></span>
  <span className="relative z-10">View Dasboard</span>
</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboards;