import get from "lodash/get";
import { GridType } from "../components/Grid/Grid";

// check boundaries of the shaped ship
// returns boolean (this shape can easily go to this cell or not)
export default function checkBundaries(
  grid: GridType,
  rowIndex: number,
  colIndex: number
): boolean {
  return (
    get(grid, `[${rowIndex}][${colIndex}]`) === 1 ||
    get(grid, `[${rowIndex + 1}][${colIndex}]`) === 1 ||
    get(grid, `[${rowIndex - 1}][${colIndex}]`) === 1 ||
    get(grid, `[${rowIndex}][${colIndex + 1}]`) === 1 ||
    get(grid, `[${rowIndex}][${colIndex - 1}]`) === 1 ||
    get(grid, `[${rowIndex + 1}][${colIndex + 1}]`) === 1 ||
    get(grid, `[${rowIndex - 1}][${colIndex - 1}]`) === 1 ||
    get(grid, `[${rowIndex - 1}][${colIndex + 1}]`) === 1 ||
    get(grid, `[${rowIndex + 1}][${colIndex - 1}]`) === 1
  );
}
