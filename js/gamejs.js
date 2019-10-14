console.log("wired up");

let playerOneTurn = true;

// grab the divs using query selector  so that we can work with them in the DOM
const gridDivArray = document.querySelectorAll('.grid');

for (let i = 0; i < gridDivArray.length; i++) {

    const gameBtn = document.createElement("button");
    gameBtn.innerText = "";

    gridDivArray[i].appendChild(gameBtn);




    gameBtn.addEventListener("click", function() {

        if (playerOneTurn === true) {
            if (this.innerText !== 'O' && this.innerText !== 'X') {
                this.innerText = "X";
                playerOneTurn = false;
            }





        }


        if (this.innerText !== 'X' && this.innerText !== 'O') {
            this.innerText = "O";

            playerOneTurn = true;
        }

    });

};