import React from "react";
import { toast } from "react-hot-toast";

export const WideCards = ({ value, content }) => {
  console.log(value?.link);
  return (
    <>
      <div className="h-[40 vh] flex w-[40vw] flex-col     bg-[#111111]  ">
        <div className="h-[40 vh]  ">
          <img className="h-[40 vh] 	 " src={value?.link} />
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
