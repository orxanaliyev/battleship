import React, { useContext } from "react";
import "./Grid.css";
import { PlayfieldContext } from "../Playground/Playground";
import isAlreadyShipLogic from "../../utils/isAlreadyShipLogic";

const Grid = () => {
  const { grid, setFirstPosition } = useContext(PlayfieldContext);

  // create onscreen grid
  const createGrid = grid.map((row, rowIndex) => {
    // check if ship there
    const isAlreadyShipThere = (cell, rowIndex, colIndex) => {
      if (isAlreadyShipLogic(cell, grid, rowIndex, colIndex)) {
        setFirstPosition(rowIndex, colIndex);
      }
    };

    return (
      <div key={rowIndex} className={"Grid-row"}>
        {row.map((cell, colIndex) => {
          return (
            <div
              key={colIndex}
              className={`Grid-cell ${
                cell === 1
                  ? "Ship-color"
                  : cell === 2
                  ? "Ship-sunk"
                  : cell === 3
                  ? "Cell-shot-color"
                  : "Empty-cell-color"
              }`}
              onClick={() => isAlreadyShipThere(cell, rowIndex, colIndex)}
            >
              {cell.toLocaleString().slice(0, 0)}
            </div>
          );
        })}
      </div>
    );
  });

  return <div className={"column"}>{createGrid}</div>;
};

export default Grid;
