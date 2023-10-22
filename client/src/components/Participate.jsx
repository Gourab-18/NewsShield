import React from "react";
export const Participate = () => {
  return (
    <>
      <div className="my-6 flex h-[80vh] w-[40vw] flex-col items-center gap-10 border-[0.2px] border-dotted border-pink-200	 py-4 shadow-lg">
        {/* <div > */}
        <div className=" 	font-small text-2xl text-white	">Tweet ID:123456</div>

        <div className="w-[90%]">
          <img
            className="h-[40 vh]  "
            src="https://res.cloudinary.com/sambitsankalp/image/upload/v1660395461/hackathons/Hero_Section_twito_yz1ovz.png"
          />
        </div>

        <div className="flex items-center justify-center ">
          <button
            type="submit"
            className=" rounded-sm  bg-purple-700 px-4  py-2 text-center text-sm  font-medium uppercase text-white hover:bg-purple-800 hover:opacity-80"
          >
            Participate
          </button>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
