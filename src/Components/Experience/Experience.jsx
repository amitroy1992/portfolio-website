import React from "react";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="bg-[#0f172a] text-white py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Experience
      </h2>

      <div className="space-y-8 max-w-5xl mx-auto">

        {/* BUSINESS */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">
            Co-Founder & Data Analyst – Roy’s Kitchen
          </h3>
          <p className="text-gray-400 text-sm mb-3">2024 – Present</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Analyzed ₹2L+ monthly revenue and 1,000+ transactions using Excel & SQL</li>
            <li>Improved customer retention by 15–20% through data-driven insights</li>
            <li>Automated reporting dashboards, saving 5+ hours/week</li>
            <li>Optimized pricing and promotions using sales trend analysis</li>
          </ul>
        </div>

        {/* KORN FERRY */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">
            Software Developer – Korn Ferry
          </h3>
          <p className="text-gray-400 text-sm mb-3">Jun 2023 – Oct 2023</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Worked on enterprise-scale applications with focus on performance optimization</li>
            <li>Handled large datasets and improved data flow efficiency</li>
            <li>Collaborated in Agile teams using JIRA and delivered production-ready features</li>
          </ul>
        </div>

        {/* TCS */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">
            System Engineer II – Tata Consultancy Services (TCS)
          </h3>
          <p className="text-gray-400 text-sm mb-3">Aug 2022 – Nov 2022</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Worked with SQL and backend systems for data processing and reporting</li>
            <li>Integrated frontend with backend APIs and databases</li>
            <li>Improved data handling and query performance</li>
          </ul>
        </div>

        {/* DXC / ARTECH */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">
            UI Developer – DXC Technology
          </h3>
          <p className="text-gray-400 text-sm mb-3">Nov 2021 – Jun 2022</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Built responsive React applications with data-driven UI components</li>
            <li>Integrated APIs and improved UI performance and load time</li>
            <li>Worked with cross-functional teams in Agile environment</li>
          </ul>
        </div>

        {/* QUANTUM */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">
            Frontend Developer – Quantum Infocom
          </h3>
          <p className="text-gray-400 text-sm mb-3">Jul 2018 – Aug 2021</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Developed scalable web applications using React and JavaScript</li>
            <li>Integrated backend APIs and improved application performance</li>
            <li>Worked on data-driven UI features and user experience improvements</li>
          </ul>
        </div>

        {/* INTERNSHIPS */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">
            Virtual Internships – Deloitte | BCG | Tata
          </h3>
          <p className="text-gray-400 text-sm mb-3">2024</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Deloitte – Built Excel dashboards for business insights</li>
            <li>BCG – Performed campaign data analysis and strategy insights</li>
            <li>Tata – Created Tableau dashboards and executive-level reports</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Experience;