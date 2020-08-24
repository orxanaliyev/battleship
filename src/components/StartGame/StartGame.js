import React, { useContext, useEffect, useState } from "react";
import { PlayfieldContext } from "../Playground/Playground";
import generateShootPosition from "../../utils/generateShootPosition";

const StartGame = () => {
  const [started, setStarted] = useState(false);
  const [finalMessage, setFinalMessage] = useState(false);
  const {
    isAllShipsReady,
    grid,
    shootPosition,
    finalOuputMessage,
  } = useContext(PlayfieldContext);

  useEffect(() => {
    let timeOutId = null;

    if (started) {
      if (!grid.flat().includes(1)) {
        setFinalMessage(true);
      } else {
        timeOutId = setTimeout(
          () => shootPosition(generateShootPosition(grid)),
          0
        );
      }
    }

    return () => {
      clearTimeout(timeOutId);
    };
  }, [grid.flat().join(" "), started]);

  const gameOver = () => {
    return (
      <div className={"ui big blue message"}>{finalOuputMessage.message}</div>
    );
  };

  return (
    <div>
      <button
        className={"ui button red big"}
        disabled={isAllShipsReady ? "disable" : ""}
        onClick={() => setStarted(true)}
      >
        Start attack
      </button>
      {finalMessage ? gameOver() : ""}
    </div>
  );
};

export default StartGame;
