// Define our board and player ( whos turn first)

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

// Now we need cell & reset btn & the meesage 

// get all the cells on the game board
let cells = document.querySelectorAll(".cell");

// get the reset button & message  element
let resetButton =  document.querySelector("#reset");

let messageElement = document.querySelector("#message");


// Add event listeners to each cell 

cells.forEach((cell,index) => {
     cell.addEventListener('click', () => { 
           
            // check cell if its is already occupied or the game is over

          if(board[index] === "" && !isGameOver()){
            // update board , current player marks
            board[index] = currentPlayer;
            cell.classList.add(currentPlayer.toLowerCase());
            cell.innerHTML = currentPlayer;


            // check  if  the game is over after current move
            
            if(isGameOver()){

                messageElement.innerHTML = currentPlayer + " Wins!";
                cells.forEach((cell) => cell.removeEventListener('click' ,handleCellClick));
            }

            else if(!board.includes("")){
                //update the message if the game is draw
                messageElement.innerHTML = "Match draw!";
            }

            else{
                currentPlayer  = 
                currentPlayer === "X" ? "O" : "X";

                messageElement.innerHTML = currentPlayer + "'s turn"
            }

          }
     })
});

resetButton.addEventListener('click', () => {
       board = ["", "", "", "", "", "", "", "", ""];
       currentPlayer = "X";
       cells.forEach((cell) => {
             cell.classList.remove("x" , "o");
             cell.innerHTML = "";
       });

       messageElement.innerHTML = "X's turn";
       cells.forEach((cell) => 
        cell.addEventListener('click' , handleCellClick));
        

})      


// now we create a function -> who win , diff cases  diagonaaly row wise , column wise same

// Check the game status and winner possiblity

function isGameOver(){

    // Define the possible winning combination

    const winningCombos =   [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ];

    return winningCombos.some((combo) => {
        return (
            board[combo[0]] !== ""&&
            board[combo[0]] === board[combo[1]]&&
            board[combo[1]] === board[combo[2]]
        );
    });

}

// To handle our cell click

function handleCellClick(){
     console.log("Cell clicked");
}






