import React, { useContext } from "react";
import Ship from "../Ship/Ship";
import StartGame from "../StartGame/StartGame";
import { PlayfieldContext } from "../Playground/Playground";

const Menu = () => {
  const { initialShip } = useContext(PlayfieldContext);
  const { lShape, iShape, dotShape } = initialShip;

  return (
    <div className={"column"}>
      <div className={"ui vertical buttons"}>
        {/* <Ship {...lShape} /> */}
        <Ship {...iShape} />
        <Ship {...dotShape} />
      </div>
      <div className={"ui divider"}></div>
      <StartGame />
    </div>
  );
};

export default Menu;
