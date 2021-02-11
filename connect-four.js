import { Game } from "./game.js";
let game;
const updateUI = () => {
  const boardHolder = document.getElementById("board-holder");
  if (game === undefined) {
    boardHolder.setAttribute("class", "is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    document.getElementById("game-name").innerHTML = `${Game.getName()}`;
  }
};
window.addEventListener("DOMContentLoaded", (event) => {
  const player1Input = document.getElementById("player-1-name");
  const player2Input = document.getElementById("player-2-name");
  const formHolder = document.getElementById("form-holder");
  const newGameButton = document.getElementById("new-game");
  const disableButton = () => {
    newGameButton.disabled = true;
  };
  formHolder.addEventListener("keyup", (event) => {
    if (player1Input.value !== "" && player2Input.value !== "") {
      newGameButton.disabled = false;
    } else {
      disableButton();
    }
  });

  newGameButton.addEventListener("click", (event) => {
    event.preventDefault();
    game = new Game(player1Input.value, player2Input.value);
    //console.log(Game);
    player1Input.value = "";
    player2Input.value = "";
    disableButton();
    updateUI();
  });
});
