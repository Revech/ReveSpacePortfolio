import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Some of my Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/old.png"
          title="Modern Portfolios"
          description="My First practice on frontend was doing portfolios and each time getting better"
        />
        <ProjectCard
          src="/old4.jpg"
          title="Breast Cancer Detector"
          description="The Breast Cancer Diagnosis model employs binary classification methodology along with a pre-defined dataset to determine the likelihood of an individual having breast cancer."
        />
        <ProjectCard
          src="/old3.png"
          title="Money Transfer"
          description="Facilitating seamless financial transactions and fund transfers among individuals, our platform integrates the services provided by telecommunication companies."
        />

<ProjectCard
          src="/Snap_Sign_Speak_Logo.png"
          title="Snap AI"
          description="About
Snap AI is a revolutionary web application designed to bridge communication gaps by translating American Sign Language (ASL) into text. Leveraging advanced AI-powered models, Snap AI allows users to upload photos or videos of ASL gestures, which are then accurately converted into readable script."
        />

<ProjectCard
          src="/latifa.png"
          title="Latifa Sweets"
          description="Bakery website is a vibrant and engaging platform designed to showcase a charming local bakery’s offerings and create a delightful user experience. "
        />

<ProjectCard
          src="/reve.png"
          title="Revellion"
          description="E-Shop Emporium is a sleek and highly functional online store designed to offer a seamless shopping experience inspired by Amazon's user-centric design. "
        />

      </div>
    </div>
  );
};

export default Projects;
