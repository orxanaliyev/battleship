import React from "react";
import { GridType } from "../Grid/Grid";
import {
  greetingWords,
  initialShipSetup,
  finalOuputMessage,
} from "../../constants";

interface IPlayfieldContext {
  greetingWords: typeof greetingWords;
  grid: GridType;
  setPosition: (ship: GridType) => void;
  shapedShip: [number, number];
  setFirstPosition: (rowIndex: number, colIndex: number) => void;
  selectedShapeShip: string;
  setSelectedShapeShip: React.Dispatch<React.SetStateAction<string>>;
  initialShip: typeof initialShipSetup;
  isAllShipsReady: boolean;
  shootPosition: ([rowIndex, colIndex]: [number, number]) => void;
  finalOuputMessage: typeof finalOuputMessage;
}

const PlayfieldContext = React.createContext<IPlayfieldContext>({
  greetingWords,
  grid: [],
  setPosition: () => {},
  shapedShip: [0, 0],
  setFirstPosition: () => {},
  selectedShapeShip: "",
  setSelectedShapeShip: () => {},
  initialShip: initialShipSetup,
  isAllShipsReady: true,
  shootPosition: () => {},
  finalOuputMessage,
});

export default PlayfieldContext;
