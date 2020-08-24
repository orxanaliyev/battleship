// create playfield grid with row and col
export default function createGrid(row, col) {
  const playfield = [];

  for (let y = 0; y < row; y++) {
    playfield[y] = [];

    for (let x = 0; x < col; x++) {
      playfield[y][x] = 0;
    }
  }

  return playfield;
}
