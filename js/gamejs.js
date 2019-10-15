console.log("wired up");
const moves = [];

let playerOneTurn = true;

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
            // }        }
        } else {
            moves[this.id] = 'O'
            this.innerText = "O";

            playerOneTurn = true;
        }

        // if (this.innerText !== 'X' && this.innerText !== 'O') {

        // }
        console.log(moves)
    });

};

if (moves[0] === moves[1] && moves[1] === moves[2]) {

} else if

else if