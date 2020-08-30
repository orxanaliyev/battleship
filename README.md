To run the App on your localhost `npm start` <br />

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## About Game

This game was created as a test project.

When you start the game, you must first set up your initial ships (for now `"I shaped"` and `"dot shaped"`). The ships will be placed in the cells where you click, but rotation will be randomly (for `"I shape"` is vertical or horizontal). The ships do not overlap, there is at least a single cell between them. The color of the ships is blue (feel free to change colors in `Grid.css` file (ships - blue, shot cell - grey, sunken ship - red)). The installed ship's button will be disabled after select due the count of this ship.

After setting up all the ships, the `Start Attack` button will be activated, when you click this button, the program will shoot at random positions (once per position). After shooting the last ship, the program will stop shooting and will be able to tell that `"The ships have sunk and the game is over!"`. The sunken ship will be red, empty shots - grey.

## Docs

In the Playground component, you can find main objects with main configurations which sends to separate components using useContext().<br />
  <b>* greetingWords{}</b> - here you can update the title and description of the game in the header<br />
  <b>* initialShipSetup{}</b> - here you can set ship <b>(count, label, shape, cellSize)</b> and make sure you provide with <b>allShipsCount</b>.<br />
  <b>* finalOuputMessage{}</b> - here you can set <b>message</b> (<i>ex.</i> ships have sunk and game is over.)<br />

<i>There are no additional npm packages for now, so you don't need to install</i>


<h2>Enjoy !</h2>
