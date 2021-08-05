let randomSquares = []; //creates the array to be populated by the randomise function
let grid = document.getElementById("grid");
let gridRow = ""; //these will be the rows (divs) to be appended to the minesweeper grid
let difficulty = document.getElementById("difficulty"); //targets the dropdown selector per the html file
difficulty.addEventListener("change", variableVariables);
let selectedRows = 9;
let selectedBombs = 15;
let selectedSquares = 81;
let gridRowsList = document.getElementsByClassName("grid-rows"); // to create an array of the grid rows to iterate over
let scoreContainer = document.getElementById("score-container"); // gets the div to be populated by the remaining flags tally
let play = document.getElementById("play"); // gets the start game button from the html file
function addPlayFunctions() {
    play.addEventListener("click", stylingChanges);
    play.addEventListener("click", generatedGridRows); // generates the number of rows as per the difficulty selected
    play.addEventListener("click", randomise);
    play.addEventListener("click", newGame);
    play.addEventListener("click", squareSize);
    play.addEventListener("click", checkerboard);
    play.addEventListener("click", addFlags);
    play.addEventListener("click", assignRelativePosition);
    play.addEventListener("click", assignHTML);
    play.addEventListener("click", bombIcon);
    play.addEventListener("click", flags);
}
function removePlayFunctions() {
    play.removeEventListener("click", generatedGridRows); // generates the number of rows as per the difficulty selected
    play.removeEventListener("click", randomise);
    play.removeEventListener("click", newGame);
    play.removeEventListener("click", squareSize);
    play.removeEventListener("click", checkerboard);
    play.removeEventListener("click", addFlags);
    play.removeEventListener("click", assignRelativePosition);
    play.removeEventListener("click", assignHTML);
    play.removeEventListener("click", bombIcon);
    play.removeEventListener("click", flags);
}
addPlayFunctions();
function variableVariables() {
    let selectedDifficulty = difficulty.value;
    if (selectedDifficulty == "Easy") {
        selectedRows = 9;
        selectedBombs = 15;
        selectedSquares = 81;
    } else if (selectedDifficulty == "Medium") {
        selectedRows = 15;
        selectedBombs = 40;
        selectedSquares = 225;
    } else if (selectedDifficulty == "Hard") {
        selectedRows = 20;
        selectedBombs = 99;
        selectedSquares = 400;
    } else if (selectedDifficulty == "Custom") {
        selectedRows = 16;
        selectedBombs = 10;
        selectedSquares = selectedRows*selectedRows;
    }
}
function stylingChanges() {    
    let selectorStart = document.getElementById("selector-start");
    selectorStart.classList.remove("min-width", "selector-start-onload");
    selectorStart.classList.add("absolute");
    difficulty.classList.remove("cairo", "text-medium", "bg-green");
    difficulty.classList.add("bg-black");
    let playIcon = document.getElementById("play-icon");
    playIcon.classList.remove("text-big", "bg-pink");
    playIcon.classList.add("score-bar-bg");
    let outerContainer = document.getElementById("outer-container");
    outerContainer.classList.remove("margin-top-big");
    outerContainer.classList.add("margin-top-small");
    let callToPlay = document.getElementById("call-to-play");
    callToPlay.innerHTML = "";
    let scoreBar = document.getElementById("score-bar");
    scoreBar.classList.add("score-bar-bg");
    let play = document.getElementById("play");
    play.classList.add("score-bar-bg")
    let flagContianer = document.getElementById("flag-container");
    flagContianer.classList.remove("invisible-text");
    flagContianer.classList.add("text-red");
}
function generatedGridRows() {
    grid.innerHTML = "";
    for (i = 0; i < selectedRows; i++) {
        gridRow = document.createElement("div");
        gridRow.classList.add("grid-rows", `grid-row-${i}`) // to be able to identify the row precisely when necessary
        grid.appendChild(gridRow);
    } // this loop creates the number of rows determined by the selected difficulty and adds them to the grid
}
function randomise() {
/*Adds random numbers to the randomSquares variable (15 for easy, 40 for medium and 99 for hard). 
Multiplies each random number by the number of squares on the grid, and pushes them to the array 
IF the random number y does NOT appear in the list already, ie so that each number in the array
is unique. This ensures that ultimately the grids will have the correct number of mines, and no
squares with > 1 mine.*/
randomSquares = []; // to be populated by array of random numbers to be iterated to randomly place the "mines"
    while (randomSquares.length < selectedBombs) {
        let y = Math.floor(Math.random()*selectedSquares);
        if (randomSquares.includes(y) === false) {
            randomSquares.push(y);
        }  
    }    
}
function newGame() {
    for (x = 0; x < selectedRows; x++) {
        for (y = 0; y < selectedRows; y++) {
            /* the for x loop iterates through the rows of the grid and the nested y loop generates 9 squares for each row,
            to end up with a 9x9 grid of squares.*/ 
            let squares = document.createElement("div"); // these are the "square" button elements created x9 for each x loop
            squares.classList.add("squares");
            squares.classList.add("hovered-squares"); // this class adds the highlight on hover effect 
            let squaresNumber = (y*selectedRows)+x; 
            /* variable to be assigned to each square as a unique id, so they can be "searched"
            for the presence of "mines"*/
            if (randomSquares.includes(squaresNumber)) {
                /* This code whether the list of random numbers generated by the randomise function includes the number assigned 
                to the squaresNumber variable, and if so to assign the square the class of "bomb" and if not the class of 
                "no-bomb". This effectively checks whether the square's id is included in the list of random numbers. */ 
                squares.classList.add("bomb");
            } else {
                squares.classList.add("no-bomb");
            }
            squaresFunctions(squares);
            squares.id = squaresNumber; // assigns each square a uniqe id based on its position in the grid
            gridRowsList[y].appendChild(squares); // adds each of the 9 squares created in each iteration of the outer loop
        }   
    }        
}
function squareSize() {
    let squares = document.getElementsByClassName("squares");
    let selectedDifficulty = difficulty.value;
    for (square of squares) {
        if (selectedDifficulty == "Easy") {
            square.classList.add("squaresBig");   
        } else if (selectedDifficulty == "Medium") {
            square.classList.add("squaresMedium") ;   
        } else {
            square.classList.add("squaresSmall");   
        }
    }
}
function squaresFunctions(squares) {
    squares.addEventListener("click", minesweep); // function to detect how many mines are in the squares surrounding the clicked square
    squares.addEventListener("click", counter); // function counts how many squares with no mines have been clicked to determine ultimate success
    squares.addEventListener("click", gameOverOne); // performs part of the game over "animation" sequence
    squares.addEventListener("click", gameOverTwo); // performs part of the game over "animation" sequence
}
function checkerboard() {
/* the outer loop iterates over the rows of the grid and the nested loop iterates over the 
    squares (ie children of the rows). The code says if the row's index is even then the first square
    of that row is given the class of "odd-squares", and every alternate square of that row is
    given the class of "even-squares", and then the reverse for rows with indices that are odd.
    This is purely for styling in the checkerboard pattern, and to distinguish the code applied to 
    every alternate row of the grid. If the same code was applied to every row the grid would have
    vertical stripes and not a chequered effect. */
    for (let i = 0; i < selectedRows; i++) {
        for (let x = 0; x < selectedRows; x++) {
            if (i % 2 === 0 && x % 2 === 0) {
                gridRowsList[i].children[x].classList.add("odd-squares");
            }   else if (i % 2 === 0 && x % 2 > 0) {
                gridRowsList[i].children[x].classList.add("even-squares");
            } 
        }
        for (let x = 0; x < selectedRows; x++) {
            if (i % 2 > 0 && x % 2 > 0) {
                gridRowsList[i].children[x].classList.add("odd-squares");
            } else if (i % 2 > 0 && x % 2 === 0) {
                gridRowsList[i].children[x].classList.add("even-squares");
            }
        }
    }
}
function bombIcon() {
    let squares = document.getElementsByClassName("squares");  
    for (square of squares) { // simple loop to assign squares with class of "bomb" the skull font awesome icon as innerHTML
        if (square.classList.contains("bomb")) {
            square.innerHTML = `<i class="fas fa-skull"></i>`;
        }
    }
}
function flags() {
    /* Assigns the starting value of the number flags in hand counter depending on the selected difficulty*/
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML = selectedBombs;
}
