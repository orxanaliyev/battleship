import React, { useContext, useEffect } from "react";
import "./Ship.css";
import { PlayfieldContext } from "../Playground/Playground";
import checkBundaries from "../../utils/checkBundaries";

const Ship = ({ label, count, shape, cellSize }) => {
  const {
    shapedShip,
    grid,
    setPosition,
    selectedShapeShip,
    setSelectedShapeShip,
  } = useContext(PlayfieldContext);

  // create ship
  const createShapedShip = (type) => {
    const isBottomToTop = Math.floor(Math.random() * 2); // returns number 0,1 (false | true)
    const isVertical = Math.floor(Math.random() * 2); // returns number 0,1 (false | true)
    const xCoord = shapedShip[0];
    const yCoord = shapedShip[1];

    const isRowOutOfPlayfield =
      xCoord + cellSize > grid.length - 1 || !(xCoord - cellSize < 0) ? -1 : 1;
    const isColOutOfPlayfield =
      yCoord + cellSize > grid[0].length - 1 || !(yCoord - cellSize < 0)
        ? -1
        : 1;

    let ship = [];

    if (type === "I") {
      // returns I shaped ship (vertical or horizontal will be randomly set)
      ship = new Array(cellSize)
        .fill([xCoord, yCoord])
        .map(([xCoord, yCoord], index) => [
          isVertical ? xCoord + index * isRowOutOfPlayfield : xCoord,
          isVertical ? yCoord : yCoord + index * isColOutOfPlayfield,
        ]);

      return ship.some(([rowIndex, colIndex]) => {
        return checkBundaries(grid, rowIndex, colIndex);
      })
        ? []
        : ship;
    } else if (type === "L") {
      return (ship = [
        [xCoord, yCoord],
        [isBottomToTop ? xCoord + 1 : xCoord - 1, yCoord],
        [isBottomToTop ? xCoord + 2 : xCoord - 2, yCoord],
        [
          isBottomToTop ? xCoord + 2 : xCoord - 2,
          isBottomToTop ? yCoord + 1 : yCoord - 1,
        ],
      ]);
    }

    return ship;
  };

  const onClickShipButtonHandler = () => {
    setSelectedShapeShip(shape); // set selected ship type (L, I, O) on grid
  };

  useEffect(() => {
    if (shapedShip[0] !== undefined && selectedShapeShip === shape) {
      let ship = [];

      switch (selectedShapeShip) {
        case "L":
          ship = createShapedShip(selectedShapeShip);

          break;
        case "I":
          ship = createShapedShip(selectedShapeShip);

          break;
        case "O":
          ship = [shapedShip];

          break;
        default:
          ship = [];
      }

      setPosition(ship);
      setSelectedShapeShip(""); // set selected ship type (L, I, O) on grid
    }
  }, [shapedShip[0], shapedShip[1]]);

  return (
    <button
      onClick={onClickShipButtonHandler}
      className={"Ship-button ui blue button"}
      disabled={count ? "" : "disabled"}
    >
      {label}
      <span className={"Ship-count"}>{count}</span>
    </button>
  );
};

export default Ship;
