export default function generateShootPosition(grid) {
  // generate shoot with random coords
  // retuns array with y and x coords [0,0]

  const rowIndex = Math.floor(Math.random() * 10);
  const colIndex = Math.floor(Math.random() * 10);

  if (grid[rowIndex][colIndex] === 3 || grid[rowIndex][colIndex] === 2) {
    // if this cell has already been shot, takes another shot
    return generateShootPosition(grid);
  }

  return [rowIndex, colIndex];
}
