import React from "react";

export const WideCards = ({content}) => {
  return (
    <>
      <div className="h-[40 vh] flex w-[40vw] flex-col     bg-[#111111]  ">
        <div>
          <img
            className="h-[40 vh]  "
            src="https://res.cloudinary.com/sambitsankalp/image/upload/v1660395461/hackathons/Hero_Section_twito_yz1ovz.png"
          />
        </div>
        <div className="">
          <button
            type="submit"
            className=" w-[100%]  rounded-sm  bg-purple-700 px-4  py-2 text-center text-sm  font-medium uppercase text-white hover:bg-purple-800 hover:opacity-80"
          >
            {content}
          </button>
        </div>
      </div>
    </>
  );
};
