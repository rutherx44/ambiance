import React from "react";

//* Round Button
export const Button = ({ buttonClick, displayText = "Submit" }) => {
  return (
    <button
      className="w-[164px] h-12 flex items-center justify-center border border-[#F7941D] rounded-md font-normal text-[#F7941D] hover:text-white hover:bg-[#F7941D] transition-all"
      onClick={buttonClick}
    >
      {displayText}
    </button>
  );
};
