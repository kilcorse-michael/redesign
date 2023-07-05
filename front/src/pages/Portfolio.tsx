import React, { useState } from "react";
import Header from "../components/Header";
import jeffPic from "../assets/projects/jeff-mann.png";
import kiddPic from "../assets/projects/kiddpro.png";
import otPic from "../assets/projects/OT-pic.png";

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Jeffrey Mann Fine Jewelers",
    description: "Description of Project 1",
    image: jeffPic,
  },
  {
    title: "The Ottawa Tavern",
    description: "Description of Project 2",
    image: otPic,
  },
  {
    title: "Kidd.pro",
    description: "Description of Project 2",
    image: kiddPic,
  },
];

const Portfolio: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const handleClick = (project: Project) => {
    setCurrentProject(project);
  };

  return (
    <>
      <Header />
      <div className="container text-white mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <div className="flex flex-wrap">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
            >
              <div
                className=" p-4 cursor-pointer h-full"
                onClick={() => handleClick(project)}
              >
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <img src={project.image} alt={project.title} className="mb-2" />
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        {currentProject && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">{currentProject.title}</h2>
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="mb-4"
            />
            <p>{currentProject.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
