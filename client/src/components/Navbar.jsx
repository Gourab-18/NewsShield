import React, { useContext } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Web3Context from ".././contexts";

export const Navbar = () => {
  const { connectWallet, account } = useContext(Web3Context);

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
            // onClick={() => toast.loading(" Connecting")}
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
          <Toaster
            position="top-center"
            reverseOrder={true}
            gutter={4}
            toastOptions={{
              // Define default options
              className: "",
              duration: 1000,
              style: {
                background: "rgb(126 34 206)",
                color: "#fff",
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
