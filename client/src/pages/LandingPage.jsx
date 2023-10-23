import React from "react";
import { Heading } from "../components/Heading";

import { WideCards } from "../components/WideCards";
export const LandingPage = () => {
  const arr = ["Hii", "Bye", "Why", "Buj"];
  return (
    <>
      <div>
        <Heading content="Recent Tweets" />

        <div className="mt-4 grid grid-cols-2   items-center gap-12 p-6 px-8">
          {arr.map((val, index) => {
            return (
              <article className="" key={index}>
                <WideCards content={"Approve"} />
              </article>
            );
          })}
        </div>
      </div>

      <Heading content="Vote For" />

      <div className="mt-4 grid grid-cols-2   items-center gap-12 p-6 px-8">
        {arr.map((val, index) => {
          return (
            <article className="" key={index}>
              <WideCards content={"Enter Room"} />
            </article>
          );
        })}
      </div>
    </>
  );
};
