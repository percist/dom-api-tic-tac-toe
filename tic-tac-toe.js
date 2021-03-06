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
  let boardIsFull = false;
  const key = "tic-tac-toe-game-state"
  function saveGameState () {
    const state = {
      currentPlayerSymbol,
      squareValues,
      statusOfGame
    }
    window.localStorage.setItem(key, JSON.stringify(state));
  };
  function loadGameState () {
    const savedState = window.localStorage.getItem(key);
    if (savedState === null){
      return
    }
    const state = JSON.parse(savedState)
    currentPlayerSymbol = state.currentPlayerSymbol;
    squareValues = state.squareValues;
    statusOfGame = state.statusOfGame;
    for(let i = 0; i < 9; i++){
      if(squareValues[i] !== ""){

        const bigOlX = document.createElement("img");
        bigOlX.src = PLAYER_ONE_SYMBOL;
        const bigOlO = document.createElement("img");
        bigOlO.src = PLAYER_TWO_SYMBOL;

        if (squareValues[i] == "x") {
          event.target.appendChild(bigOlX);
          currentPlayerSymbol = "o";
        } else {
          event.target.appendChild(bigOlO);
          currentPlayerSymbol = "x";
        }
    }

    }
        if(statusOfGame !== '') {
            document.getElementById('game-status').innerHTML = statusOfGame;
            document.getElementById('new-game').disabled = false;
        }
  };

  function checkBoard() {
      boardIsFull = true;
    for(let i = 0; i <squareValues.length; i++) {
        if(squareValues[i] === '') {
            boardIsFull = false
        }
      }
      if(boardIsFull === true) {
          itsAWin();
      }
    }

  let checkStatusOfGame = () =>{
    for(let i = 0; i < 9; i += 3){
      if(squareValues[i] !== '' && squareValues[i] === squareValues[i+1] && squareValues[i] === squareValues[i+2]){
        itsAWin(squareValues[i]);
        winnerTolken = squareValues[i];
      }
    }
    for(let i = 0; i < 9; i += 1 ){
      if(squareValues[i] !== '' && squareValues[i] === squareValues[i + 3] && squareValues[i] === squareValues[i + 6]) {
        itsAWin(squareValues[i]);
        winnerTolken = squareValues[i];
      }
    }
    if(squareValues[0] !=='' && squareValues[0] === squareValues[4] && squareValues[0] === squareValues[8]) {
        itsAWin(squareValues[0]);
        winnerTolken = squareValues[0];
    }
    if(squareValues[2] !== '' && squareValues[2] === squareValues[4] && squareValues[4] === squareValues[6]){
        itsAWin(squareValues[2]);
        winnerTolken = squareValues[2];
    }

  }
    document.getElementById("new-game").addEventListener("click", event => {
        currentPlayerSymbol = 'x';
        statusOfGame = ''
        document.getElementById('game-status').innerHTML = statusOfGame;
        squareValues = ["", "", "", "", "", "", "", "", ""];
        for(let i = 0; i<9; i++) {
            document.getElementById(`square-${i}`).innerHTML = ''
        }
        document.getElementById("new-game").setAttribute('disabled', 'true')
    })

    document.getElementById("give-up").addEventListener("click", event => {
        currentPlayerSymbol = 'x';
        statusOfGame = ''
        document.getElementById('game-status').innerHTML = statusOfGame;
        squareValues = ["", "", "", "", "", "", "", "", ""];
        for(let i = 0; i<9; i++) {
            document.getElementById(`square-${i}`).innerHTML = ''
        }

    })

    function itsAWin (winner) {

      if(boardIsFull === true) {
          statusOfGame = "It's a Tie"
      } else {
    statusOfGame = `Winner is ${winner.toUpperCase()}`
      }
    document.getElementById("game-status").innerHTML = statusOfGame;

    document.getElementById("new-game").removeAttribute("disabled");

    }

  document
    .getElementById("tic-tac-toe-board")
    .addEventListener("click", (event) => {
        if(statusOfGame !== '') {
            return;
        }
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
      checkStatusOfGame()
      checkBoard();


    });



  document.getElementById("")

  function occupiedSpace() {
    if (squareValues[playerMove] === "") {
      squareValues[playerMove] = currentPlayerSymbol;
    }
  }
});
