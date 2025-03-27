import React from "react";
import { FaBootstrap, FaCss3, FaFigma, FaGithub, FaHtml5, FaJira, FaJs, FaReact } from "react-icons/fa";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJira color="#F24E1E" size={50} />
          </span>
         
          
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            
            <span className="text-white">
              <h2 className="leading-tight">Software Developer , Korn Ferry</h2>
              <p className="text-sm leading-tight font-thin">
                June 2023 - October 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Led development of KF Assess 3.0, collaborating with the design team and implementing Jest for testing.</li>
                <li>- Deployed with Azure App Service, and used Node.js for backend integration.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            
            <span className="text-white">
              <h2 className="leading-tight">System Engineer II, Tata Consultancy Services</h2>
              <p className="text-sm leading-tight font-thin">
                Aug 2022- November 2022
              </p>
              <ul className="text-sm p-2">
                <li>- Developed the Metlife-RIS Data Store, integrating React with Java and Springboot.</li>
                <li>- Utilized Material UI, Redux, and Jest for building scalable and maintainable applications.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
           
            <span className="text-white">
              <h2 className="leading-tight">UI Developer, Artech Infosystems Pvt.Ltd.</h2>
              <p className="text-sm leading-tight font-thin">
                November 2021 - June 2022
              </p>
              <ul className="text-sm p-2">
                <li>- Developed the UI for NAB BPE Mini app, integrated with Azure Cosmos DB and used GraphQL for efficient data fetching.</li>
                <li>- Focused on creating seamless UI/UX experiences, collaborating closely with cross-functional teams.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            
            <span className="text-white">
              <h2 className="leading-tight">Frontend Developer, Quantum Infocom</h2>
              <p className="text-sm leading-tight font-thin">
                July 2018- August 2021
              </p>
              <ul className="text-sm p-2">
                <li>- Built the Zing Up Life platform using Node.js, Express, and MongoDB, focusing on performance optimization and user experience.</li>
                <li>- Integrated frontend with backend systems, ensuring smooth operation and user interface responsiveness.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
