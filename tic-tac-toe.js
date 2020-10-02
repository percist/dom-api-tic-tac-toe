const PLAYER_ONE_SYMBOL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
const PLAYER_TWO_SYMBOL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

window.addEventListener("DOMContentLoaded", (event) => {
  let currentPlayerSymbol = "x";
  let squareValues = ["", "", "", "", "", "", "", "", ""];
  let playerMove;

  document
    .getElementById("tic-tac-toe-board")
    .addEventListener("click", (event) => {
      const targetEvent = event.target.id;

      if (!targetEvent.startsWith("square-")) {
        return;
      } else {
        playerMove = Number.parseInt(targetEvent[targetEvent.length - 1]);
        occupiedSpace();
      }

      const bigOlX = document.createElement("img");
      bigOlX.src = PLAYER_ONE_SYMBOL;
      const bigOlO = document.createElement("img");
      bigOlO.src = PLAYER_TWO_SYMBOL;

      if (currentPlayerSymbol == "x") {
        event.target.appendChild(bigOlX);
        currentPlayerSymbol = "o";
      } else {
        event.target.appendChild(bigOlO);
        currentPlayerSymbol = "x";
      }
    });

  function occupiedSpace() {
    if (squareValues[playerMove] === "") {
      squareValues[playerMove] = currentPlayerSymbol;
    }
  }
});
