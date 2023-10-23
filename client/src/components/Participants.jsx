import React from "react";

export const Participants = ({ value }) => {
  const arr = ["For", "Against", "For", "Against", "For"];
  return (
    <>
      <div className="my-6 flex min-h-[80vh] w-[40vw] flex-col  gap-10 border-[0.2px] border-dotted border-pink-200	 px-4 py-4 shadow-lg">
        {/* <div > */}
        <div className=" text-center	text-2xl font-medium text-white	">
          Participants
        </div>

        <div className=" p-4 ">
          {value && value.length > 0 &&
            value?.map((val, index) => {
              return (
                <>
                  <div
                    className=" flex   items-center justify-around border-b-[0.01px] border-gray-300 p-4 "
                    key={index}
                  >
                    <div className=" text-sm text-white">
                      <h1>axb12exjjdsl</h1>
                    </div>

                    <div className="flex min-w-[50%] items-center justify-between ">
                      <div className="mr-4 text-white">
                        <h1>0.5 Matic</h1>
                      </div>

                      <div
                        className={`
                        p-2`}
                      >
                        <h1
                          className={
                            val === "Against"
                              ? `text-[#B11F20]`
                              : `text-[#0C9669]`
                          }
                        >
                          {val}
                        </h1>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
