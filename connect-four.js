import { Game } from "./game.js";
 let game;
window.addEventListener("DOMContentLoaded", (event) => {
    const player1Input = document.getElementById("player-1-name");
    const player2Input = document.getElementById("player-2-name");
    const formHolder = document.getElementById("form-holder");
    formHolder.addEventListener("keyup", (event) => {
        if (player1Input.value !== "" && player2Input.value !== "") {
            document.getElementById("new-game").disabled = false
        }
        else {document.getElementById("new-game").disabled = true;}
    })

})