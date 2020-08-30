import React, { useState } from "react";
import cloneDeep from "lodash/cloneDeep";
import Grid, { GridType } from "../Grid/Grid";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import createGrid from "../../utils/createGrid";
import PlayfieldContext from "./Playground.context";
import {
  initialShipSetup,
  greetingWords,
  finalOuputMessage,
} from "../../constants";

const Playground: React.FC = () => {
  const [initialShip, setInitialShip] = useState(initialShipSetup);
  const [grid, setGrid] = useState(createGrid(10, 10));
  const [shapedShip, setShapedShip] = useState<[number, number]>([0, 0]);
  const [selectedShapeShip, setSelectedShapeShip] = useState("");
  const [isAllShipsReady, setIsAllShipsReady] = useState(
    initialShipSetup.allShipsCount
  );

  // set Ship on the grid with given coords (rowIndex, colIndex)
  const setPosition = (ship: GridType): void => {
    if (ship.length) {
      const newGrid: GridType = cloneDeep(grid);

      ship.forEach(([rowIndex, colIndex]): void => {
        newGrid[rowIndex][colIndex] = 1;
      });

      setGrid(newGrid);

      // subtract the ship button by 1 each selected time to disable the button
      switch (selectedShapeShip) {
        case initialShipSetup.lShape.shape:
          setInitialShip((oldState) => ({
            ...oldState,
            lShape: {
              ...oldState.lShape,
              count: oldState.lShape.count - 1,
            },
          }));
          // setIsAllShipsReady(isAllShipsReady - 1);
          break;

        case initialShipSetup.iShape.shape:
          setInitialShip((oldState) => ({
            ...oldState,
            iShape: {
              ...oldState.iShape,
              count: oldState.iShape.count - 1,
            },
          }));
          setIsAllShipsReady(isAllShipsReady - 1);
          break;

        case initialShipSetup.dotShape.shape:
          setInitialShip((oldState) => ({
            ...oldState,
            dotShape: {
              ...oldState.dotShape,
              count: oldState.dotShape.count - 1,
            },
          }));
          setIsAllShipsReady(isAllShipsReady - 1);
          break;

        default:
          break;
      }
    }
  };

  // set the actual shape of the ship on the playfiled grid
  const setFirstPosition = (rowIndex: number, colIndex: number): void => {
    if (selectedShapeShip) {
      setShapedShip([rowIndex, colIndex]);
    }
  };

  // get random coordinates and start shooting
  // return new grid
  const shootPosition = ([rowIndex, colIndex]: [number, number]): void => {
    setGrid((oldGrid) => {
      const newGrid: GridType = cloneDeep(oldGrid);

      // if there is a ship set 2, otherwise 3
      newGrid[rowIndex][colIndex] = newGrid[rowIndex][colIndex] === 1 ? 2 : 3;

      return newGrid;
    });
  };

  return (
    <PlayfieldContext.Provider
      value={{
        greetingWords,
        grid,
        setPosition,
        shapedShip,
        setFirstPosition,
        selectedShapeShip,
        setSelectedShapeShip,
        initialShip,
        isAllShipsReady: !!isAllShipsReady,
        shootPosition,
        finalOuputMessage,
      }}
    >
      <div className={"ui container"}>
        <Header />
        <div className={"ui equal width grid"}>
          <div className={"row"}>
            <Grid />
            <Menu />
          </div>
        </div>
      </div>
    </PlayfieldContext.Provider>
  );
};

export default Playground;
