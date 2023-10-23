import React from "react";
import { Participate } from "../components/Participate";
import { StakeAmount } from "../components/StakeAmount";
import { Participants } from "../components/Participants";
export const Participation = () => {
  const arr = ["For", "Against", "For", "Against", "For"];

  return (
    <>
      <div className="flex justify-around">
        <div>
          <Participate />
        </div>

        <div>
          <Participants value={[]} />
        </div>
      </div>
      <div className="flex justify-around">
        <div>
          <StakeAmount />
        </div>

        <div>
          <Participants value={arr} />
        </div>
      </div>
    </>
  );
};
