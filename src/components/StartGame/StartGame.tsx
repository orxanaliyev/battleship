import React, { useContext, useEffect, useState } from "react";
import PlayfieldContext from "../Playground/Playground.context";
import generateShootPosition from "../../utils/generateShootPosition";

const StartGame: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [finalMessage, setFinalMessage] = useState(false);
  const {
    isAllShipsReady,
    grid,
    shootPosition,
    finalOuputMessage,
  } = useContext(PlayfieldContext);

  useEffect(() => {
    let timeOutId: number;

    if (started) {
      if (!grid.flat().includes(1)) {
        setFinalMessage(true);
      } else {
        timeOutId = window.setTimeout(
          () => shootPosition(generateShootPosition(grid)),
          0
        );
      }
    }

    return () => {
      window.clearTimeout(timeOutId);
    };
    // eslint-disable-next-line
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
        disabled={!!isAllShipsReady}
        onClick={() => setStarted(true)}
      >
        Start attack
      </button>
      {finalMessage ? gameOver() : ""}
    </div>
  );
};

export default StartGame;
