import React from "react";

//* Round Button
export const Button = ({ buttonClick, displayText = "Submit" }) => {
  return (
    <button
      className="flex items-center border border-[#F7941D] rounded-s rounded-e font-sans text-xs font-normal text-[#F7941D] hover:text-white hover:bg-[#F7941D] transition-all py-2 px-6 lg:text-sm"
      onClick={buttonClick}
    >
      {displayText}
    </button>
  );
};
