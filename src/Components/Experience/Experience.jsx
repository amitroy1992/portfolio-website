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

          {/* Business */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">
            Business Operations Analyst – Roy’s Kitchen
          </h3>
          <p className="text-gray-400 text-sm mb-3">2024 – Present</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Analyzed sales and customer data to improve revenue</li>
            <li>Optimized pricing and product strategy</li>
          </ul>
        </div>

        {/* Korn Ferry */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">Software Developer – Korn Ferry</h3>
          <p className="text-gray-400 text-sm mb-3">2023</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Worked with enterprise data systems and optimized performance</li>
            <li>Integrated APIs and handled large datasets</li>
          </ul>
        </div>

        {/* TCS */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">System Engineer – TCS</h3>
          <p className="text-gray-400 text-sm mb-3">2022</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Worked with SQL and backend data systems</li>
            <li>Handled data processing and integration</li>
          </ul>
        </div>

        {/* DXC */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">
            UI Developer – DXC (Payroll: Artech)
          </h3>
          <p className="text-gray-400 text-sm mb-3">2021 – 2022</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Built React-based applications with data-driven UI</li>
            <li>Improved UI performance and responsiveness</li>
          </ul>
        </div>

        {/* Quantum */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">
            Frontend Developer – Quantum Infocom
          </h3>
          <p className="text-gray-400 text-sm mb-3">2018 – 2021</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>Developed data-driven web applications</li>
            <li>Integrated backend APIs and improved performance</li>
          </ul>
        </div>

      

        {/* Internships */}
        <div className="bg-[#1e2331] p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <h3 className="text-xl font-bold text-blue-400">
            Virtual Internships – Deloitte, Tata, BCG
          </h3>
          <ul className="list-disc ml-5 text-gray-300 space-y-2 mt-3">
            <li>Deloitte – Data Analysis (Excel)</li>
            <li>Tata – Data Visualization (Tableau)</li>
            <li>BCG – Campaign Data Analysis</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Experience;