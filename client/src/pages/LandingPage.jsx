import React from "react";
import { Heading } from "../components/Heading";

import { WideCards } from "../components/WideCards";

import { data } from "./data";

import { useState } from "react";
export const LandingPage = () => {
  const arr = ["Hii", "Bye", "Why", "Buj"];

  const [newsData, setNewsData] = useState(data);

  const [approvedData, setApprovedData] = useState([]);
  return (
    <>
      <div>
        <Heading content="Recent Tweets" />

        <div className="mt-4 grid grid-cols-2   items-center gap-12 p-6 px-8">
          {newsData.map((val, index) => {
            return (
              <article className="" key={index}>
                <WideCards value={val} content={"Approve"} />
              </article>
            );
          })}
        </div>
      </div>

      <Heading content="Vote For" />
      {approvedData.length > 0 && (
        <div className="mt-4 grid grid-cols-2   items-center gap-12 p-6 px-8">
          {arr.map((val, index) => {
            return (
              <article className="" key={index}>
                <WideCards content={"Enter Room"} />
              </article>
            );
          })}
        </div>
      )}
    </>
  );
};
