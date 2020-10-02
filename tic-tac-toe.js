const PLAYER_ONE_SYMBOL = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
const PLAYER_TWO_SYMBOL = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

window.addEventListener("DOMContentLoaded", (event) => {
    const currentPlayerSymbol = 'x';
    const squareValues = ['', '', '', '', '', '', '', '', ''];
    let playerMove =

    document.getElementById("tic-tac-toe-board").addEventListener("click", (event) => {
        const targetEvent = event.target.id;

        if(!targetEvent.startsWith('square-')) {
            return;
        } else {
           playerMove = Number.parseInt(targetEvent[targetEvent.length -1]);
        }


    });
    const occupiedSpace = () => {

    }



});
