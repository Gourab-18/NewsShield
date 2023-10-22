import React from "react";
import { Participate } from "../components/Participate";
import { StakeAmount } from "../components/StakeAmount";
import { Participants } from "../components/Participants";
export const Participation = () => {
  return (
    <>
      <div className="flex justify-around">
        {/* <Participate/> */}

        <div>
          <StakeAmount />
        </div>

        <div>
          <Participants />
        </div>
      </div>
    </>
  );
};
