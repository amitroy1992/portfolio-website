import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white w-full">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap md:flex-nowrap justify-between gap-5">
        <ProjectCard
          title="KF Assess 3.0"
          main="KF Assess 3.0 is a performance management and assessment tool that allows organizations to evaluate employee performance, skills, and potential. As part of the development team, I helped enhance its functionality and user interface, ensuring a seamless user experience for HR professionals and employees. The platform offers data-driven insights and is designed to improve employee growth and organizational performance."
        />
        <ProjectCard
          title="Metlife RIS Data Store"
          main="Metlife-RIS Data Store is a data storage and management solution that serves as the backbone for Metlife's insurance data. The system integrates React on the frontend with Java and Springboot on the backend, ensuring efficient handling of large data volumes. The product allows Metlife to manage and access critical insurance data in real-time, improving internal operations."
        />
        <ProjectCard
          title="NAB BPE Mini App"
          main="NAB BPE Mini App is a mobile banking application developed for National Australia Bank (NAB), providing users with an easy and secure way to access banking services. The app integrates with Azure Cosmos DB for data storage and uses GraphQL for data querying, offering a smooth, responsive experience. It helps users perform banking tasks such as checking balances, transferring funds, and managing accounts on the go."
        />
        <ProjectCard
          title="Zing Up Life"
          main="Zing Up Life is a web platform aimed at promoting a healthier lifestyle through fitness tracking and health-related activities. The platform allows users to monitor their wellness goals, track physical activities, and participate in fitness challenges. My contributions focused on optimizing the platform’s performance, ensuring efficient backend integration, and creating a responsive front-end experience for a smooth user journey."
        />
      </div>
    </div>
  );
};

export default Projects;
