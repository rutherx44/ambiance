import React from "react";
import { Button } from "../components/Button";
import project from "../assets/project.png";

const Project = () => {
  return (
    <section className="w-full mt-24 flex flex-col md:flex-row justify-center items-center">
      <div id="project" className="w-full">
        <img src={project} alt="Furniture" />
      </div>
      <div className="w-full mt-10 md:mt-0">
        <div className="flex flex-col gap-10 md:gap-5 lg:gap-10 lg:w-[36.25rem] px-4 mx-auto">
          <h2 className="font-alice text-center md:text-left">Projects</h2>
          <p className="font-corbel text-center px-4 sm:px-[5.625rem] md:px-0 md:text-left">
            We're what we do. We are a passionately driven team, specializing in
            residential interiors for both private and commercial clients
            throughout the world.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button displayText="VIEW MORE" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
