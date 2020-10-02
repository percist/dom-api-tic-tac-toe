const PLAYER_ONE_SYMBOL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
const PLAYER_TWO_SYMBOL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

window.addEventListener("DOMContentLoaded", (event) => {
  let currentPlayerSymbol = "x";
  let squareValues = ["", "", "", "", "", "", "", "", ""];
  let playerMove;
  let statusOfGame = "";
  let winnerTolken= '';

  let checkStatusOfGame = () =>{
    //Winning combinations: [[0,3,6}, [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6]]
    for(let i = 0; i < 9; i += 3){
      if(squareValues[i] !== '' && squareValues[i] === squareValues[i+1] && squareValues[i] === squareValues[i+2]){
        itsAWin();
        winnerTolken = squareValues[i];
      }

      
      if(squareValues[i] !== '' && squareValues[i] === squareValues[i + 3] && squareValues[i] === squareValues[i + 6]) {
        itsAWin();
        winnerTolken = squareValues[i];
      } else if(squareValues[i] !=='' && squareValues[i] === squareValues[i + 4] && squareValues[i] === squareValues[i + 8]) {
        itsAWin();
        winnerTolken = squareValues[i];
      } else if(squareValues[i] !== '' && squareValues[i] === squareValues[2] && squareValues[i] === squareValues[4] && squareValues[i] === squareValues[6]){}


    }
  }

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
