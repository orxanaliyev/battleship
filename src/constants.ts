// Greeting words
export const greetingWords = {
  title: "Battleship Game",
  description:
    "Please select ships to set them on the grid, then start to attack.",
};

// initial Ships Setup
export const initialShipSetup = {
  lShape: {
    label: "L shaped",
    count: 1,
    cellSize: 4,
    shape: "L",
  },
  iShape: {
    label: "I shaped",
    count: 1,
    cellSize: 4,
    shape: "I",
  },
  dotShape: {
    label: "Dot shaped",
    count: 2,
    cellSize: 4,
    shape: "O",
  },
  allShipsCount: 3,
};

// Final Message
export const finalOuputMessage = {
  message: "Ships have sunk and game is over!",
};
