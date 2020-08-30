import get from "lodash/get";
import { GridType } from "../components/Grid/Grid";

// check all coords to know if there a ship
export default function isAlreadyShipLogic(
  cell: number,
  grid: GridType,
  rowIndex: number,
  colIndex: number
): boolean {
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
