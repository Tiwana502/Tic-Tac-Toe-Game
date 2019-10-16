console.log("wired up");
const moves = [];

let playerOneTurn = true;
const winnerAlert = document.querySelector("#winnerAlert");

// grab the divs using query selector  so that we can work with them in the DOM
const gridDivArray = document.querySelectorAll('.grid');

for (let i = 0; i < gridDivArray.length; i++) {

    const gameBtn = document.createElement("button");
    gameBtn.innerText = "";
    gameBtn.id = i

    gridDivArray[i].appendChild(gameBtn);




    gameBtn.addEventListener("click", function() {

        if (playerOneTurn === true) {
            console.log(this)
            moves[this.id] = 'X'
                // if (this.innerText !== 'O' && this.innerText !== 'X') {
            this.innerText = "X";
            playerOneTurn = false;
            checkForWin()
                // }        }
        } else {
            moves[this.id] = 'O'
            this.innerText = "O";

            playerOneTurn = true;
            checkForWin()
        }

        // if (this.innerText !== 'X' && this.innerText !== 'O') {

        // }
        console.log(moves)
    });

};

const checkForWin = () => {
    if (moves[0] !== undefined &&
        moves[0] === moves[1] &&
        moves[1] === moves[2]) {
        winnerAlert.innerText = "You Win!";
        console.log(`${ moves[0]} Wins!`)
    } else if ((moves[3] !== undefined &&
            moves[3] === moves[4] &&
            moves[4] === moves[5])) {
        winnerAlert.innerText = "You Win!";
        console.log(`${ moves[3]} Wins!`)
    } else if ((moves[6] !== undefined &&
            moves[6] === moves[7] &&
            moves[7] === moves[8])) {
        winnerAlert.innerText = "You Win!";
        console.log(`${ moves[4]} Wins!`)

    } else if ((moves[0] !== undefined &&
            moves[0] === moves[3] &&
            moves[3] === moves[6])) {
        winnerAlert.innerText = "You Win!";
        console.log(`${ moves[5]} Wins!`)

    } else if ((moves[1] !== undefined &&
            moves[1] === moves[4] &&
            moves[4] === moves[7])) {
        winnerAlert.innerText = "You Win!";
        console.log(`${ moves[6]} Wins!`)

    } else if ((moves[2] !== undefined &&
            moves[2] === moves[5] &&
            moves[5] === moves[8])) {
        winnerAlert.innerText = "You Win!";
        console.log(`${ moves[7]} Wins!`)

    } else if ((moves[0] !== undefined &&
            moves[0] === moves[4] &&
            moves[4] === moves[8])) {
        winnerAlert.innerText = "You Win!";
        console.log(`${ moves[8]} Wins!`)

    } else if ((moves[2] !== undefined &&
            moves[2] === moves[4] &&
            moves[4] === moves[6])) {
        winnerAlert.innerText = "You Win!";
        console.log(`${ moves[9]} Wins!`)








    }



    // } else if (moves[0] !== moves[1] && moves[0] !== moves[2]) {

    //     alert("Sorry,You did not Win!");

    // }
}