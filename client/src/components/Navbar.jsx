import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="flex  w-screen  items-center justify-around border-b-[5px] border-[#111111] bg-[#111111] py-2   text-white  md:text-[25px]">
        <div>
          <h1 className="text-xl font-medium text-white hover:opacity-60">
            NewsShield
          </h1>
        </div>

        <div>
          <button
            type="submit"
            className="    rounded-sm bg-purple-700  px-4 py-2 text-center  text-sm font-medium uppercase text-white hover:opacity-80"
            // onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};
