import React from "react";

export const StakeAmount = () => {
  return (
    <div className="my-6 flex h-[80vh] w-[40vw] flex-col items-center gap-4 border-[0.2px] border-dotted border-pink-200	 py-4 shadow-lg">
      {/* <div > */}
      <div className=" 	font-small text-2xl text-white	">Tweet ID:123456</div>

      <div className="w-[90%]">
        <img
          className="h-[40 vh]  "
          src="https://res.cloudinary.com/sambitsankalp/image/upload/v1660395461/hackathons/Hero_Section_twito_yz1ovz.png"
        />
      </div>

      <div className="w-[90%] ">
        <input
          type="text"
          className="w-full rounded  border-none border-gray-300 p-2 outline-none"
          placeholder="Stake amount"
        />
      </div>

      <div className="flex w-[100%] justify-around ">
        <div className="min-w-[40%] ">
          <button
            type="submit"
            className=" w-[100%] rounded-sm bg-[#0C9669] px-4  py-2 text-center text-sm  font-medium uppercase text-white hover:opacity-80"
          >
            Not Fake
          </button>
        </div>

        <div className="min-w-[40%] ">
          <button
            type="submit"
            className=" w-[100%] rounded-sm bg-[#B11F20] px-4  py-2 text-center text-sm  font-medium uppercase text-white hover:opacity-80"
          >
            Fake
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
