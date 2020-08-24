import get from "lodash/get";

// check all coords to know if there a ship
export default function isAlreadyShipLogic(cell, grid, rowIndex, colIndex) {
  return (
    !cell &&
    !get(grid, `[${rowIndex + 1}][${colIndex}]`) &&
    !get(grid, `[${rowIndex - 1}][${colIndex}]`) &&
    !get(grid, `[${rowIndex}][${colIndex + 1}]`) &&
    !get(grid, `[${rowIndex}][${colIndex - 1}]`) &&
    !get(grid, `[${rowIndex + 1}][${colIndex + 1}]`) &&
    !get(grid, `[${rowIndex - 1}][${colIndex - 1}]`) &&
    !get(grid, `[${rowIndex - 1}][${colIndex + 1}]`) &&
    !get(grid, `[${rowIndex + 1}][${colIndex - 1}]`)
  );
}
