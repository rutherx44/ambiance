import React from "react";
import team from "../assets/team.png";
import { Button } from "../components/Button";

const Team = () => {
  return (
    <section className="w-full mt-24 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full order-1 flex justify-center sm:order-2 md:pr-[5.625rem] xl:pr-[9.375rem]">
        <img src={team} alt="People Planning" />
      </div>
      <div className="w-full order-2 my-10 md:my-0 md:order-1 md:pl-[5.625rem] xl:pl-[9.375rem]">
        <div className="flex flex-col gap-10 md:gap-5 lg:gap-10 lg:w-[36.25rem] px-4 mx-auto">
          <h2 className="font-alice text-center md:text-left">
            Be Part Of Our Team
          </h2>
          <p className="font-corbel text-center px-4 sm:px-[5.625rem] md:px-0 md:text-left">
            Explore opportunities to take your career to the next level. Join
            our team of talented individuals and let us support your curiosity
            and creative talent.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button displayText="LEARN MORE" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
