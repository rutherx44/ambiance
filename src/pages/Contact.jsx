import React from "react";
import mobile_contact from "../assets/mobile_contact.png";
import tablet_contact from "../assets/tablet_contact.png";
import { Button } from "../components/Button";

const Contact = () => {
  return (
    <section className="h-svh md:h-dvh lg:h-lvh flex items-center mx-auto relative">
      <div className="w-full flex flex-col justify-center items-center">
        <img
          className="w-svw flex md:hidden 2xs:h-[32.125rem]"
          src={mobile_contact}
          alt="Contact Banner"
        />
        <img
          className="w-dvw hidden md:flex"
          src={tablet_contact}
          alt="Contact Banner"
        />
        <div className="absolute w-full flex justify-center px-4 sm:px-[5.625rem] xl:px-[9.375rem]">
          <div
            id="career"
            className="flex flex-col items-center py-10 gap-10 rounded-md bg-white text-center shadow-lg shadow-slate-200 px-4 md:w-[54.625rem]"
          >
            <h2 className="font-alice">
              Your Space Should Reflect
              <br />
              Who You Are
            </h2>
            <p className="font-corbel">
              Ready to get started? Let us know about your project!
            </p>
            <form className="w-full font-corbel flex flex-col gap-5 md:w-[29rem]">
              <div className="form_border rounded-md p-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="font-corbel w-full bg-transparent outline-none"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form_border rounded-md p-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="font-corbel w-full bg-transparent outline-none"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form_border rounded-md p-2">
                <textarea
                  cols="30"
                  rows="10"
                  type="textarea"
                  name="message"
                  id="message"
                  className="font-corbel w-full h-28 bg-transparent outline-none"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </form>
            <div className="flex justify-center">
              <Button displayText="LEARN MORE" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
