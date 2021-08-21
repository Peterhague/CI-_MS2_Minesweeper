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
//adds all event listeners to the play button
function addPlayFunctions() {
    play.addEventListener("click", scrollDown);
    play.addEventListener("click", stylingChanges);
    play.addEventListener("click", generatedGridRows);
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
//removes all event listeners from the play button, except stylingChanges
function removePlayFunctions() {
    play.removeEventListener("click", scrollDown);
    play.removeEventListener("click", generatedGridRows);
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
//event handler for change in difficulty. Ajusts the number of rows/squares etc to be used in various other functions
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
    }
}
/*scrolls to div below grid to automatically display whole grid on click of play button*/
function scrollDown() {
    let scrollToBottom = document.getElementById("scrollToBottom");
    scrollToBottom.click();
}
//code mainly changes CSS rules applied to various elements on load to what they should be during the game
function stylingChanges() {    
    let selectorStart = document.getElementById("selector-start");
    selectorStart.classList.remove("min-width", "selector-start-onload");
    selectorStart.classList.add("absolute");
    difficulty.classList.remove("cairo", "text-medium", "bg-green");
    difficulty.classList.add("bg-black");
    let playIcon = document.getElementById("play-icon");
    playIcon.classList.remove("text-big");
    playIcon.classList.add("score-bar-bg");
    let outerContainer = document.getElementById("outer-container");
    outerContainer.classList.remove("margin-top-big");
    outerContainer.classList.add("margin-top-small");
    let callToPlay = document.getElementById("call-to-play");
    callToPlay.innerHTML = "";
    let scoreBar = document.getElementById("score-bar");
    scoreBar.classList.add("score-bar-bg");
    let play = document.getElementById("play");
    play.classList.add("score-bar-bg");
    let flagContianer = document.getElementById("flag-container");
    flagContianer.classList.remove("invisible-text");
    flagContianer.classList.add("text-red");
    let bombsMotif = document.getElementsByClassName("bombs-motif");
    for (item of bombsMotif) {
        item.classList.add("hide");
    }
}
/* this loop creates the number of rows determined by the selected difficulty and adds them to the grid.
Also adds unique class to each row to be able to identify them precisely if necessary*/
function generatedGridRows() {
    grid.innerHTML = "";
    for (i = 0; i < selectedRows; i++) {
        gridRow = document.createElement("div");
        gridRow.classList.add("grid-rows", `grid-row-${i}`);
        grid.appendChild(gridRow);
    } 
}
/*Adds random numbers to the randomSquares variable (15 for easy, 40 for medium and 99 for hard).
Multiplies each random number by the number of squares on the grid, and pushes them to the array 
IF the random number y does NOT appear in the list already, ie so that each number in the array
is unique. These numbers will be used to randomly place the mines, and this ensures that ultimately the 
grids will have the correct number of mines, and no squares with > 1 mine.*/
function randomise() {
    randomSquares = [];
    while (randomSquares.length < selectedBombs) {
        let y = Math.floor(Math.random()*selectedSquares);
        if (randomSquares.includes(y) === false) {
            randomSquares.push(y);
        }  
    }    
}
/* the for y loop iterates through the rows of the grid and its parent x loop generates the same number of
squares for each row, to end up with a square grid of 'squares'.
Each square is assigned a unique id based on its place in the grid, ie its row number (y) multiplied by the
total number of rows, plus its position in the row (x).
If this number is included in the randomSquares list of 'mine' squares, then the square is assigned the class
of "bomb", otherwise the class of "no-bomb".*/
function newGame() {
    for (x = 0; x < selectedRows; x++) {
        for (y = 0; y < selectedRows; y++) { 
            let squares = document.createElement("div");
            squares.classList.add("squares");
            squares.classList.add("hovered-squares");
            let squaresNumber = (y*selectedRows)+x; 
            if (randomSquares.includes(squaresNumber)) {
                squares.classList.add("bomb");
            } else {
                squares.classList.add("no-bomb");
            }
            squaresFunctions(squares);
            squares.id = squaresNumber; // assigns each square a unique id based on its position in the grid
            gridRowsList[y].appendChild(squares); // adds each of the 9 squares created in each iteration of the outer loop
        }   
    }        
}
//assigns squares different classes based on the selected difficulty, which will then determine their size for better UI
function squareSize() {
    let squares = document.getElementsByClassName("squares");
    let selectedDifficulty = difficulty.value;
    for (square of squares) {
        if (selectedDifficulty == "Easy") {
            square.classList.add("squares-big");   
        } else if (selectedDifficulty == "Medium") {
            square.classList.add("squares-medium") ;   
        } else {
            square.classList.add("squares-small");   
        }
    }
}
//adds the various event listeners to the individual squares
function squaresFunctions(squares) {
    squares.addEventListener("click", minesweep); 
    squares.addEventListener("touchstart", longPressDown);
    squares.addEventListener("touchend", longPressUp);
    squares.addEventListener("click", counter);
    squares.addEventListener("click", gameOverOne);
    squares.addEventListener("click", gameOverTwo);
}
/*the outer loop iterates over the rows of the grid and the nested loops iterates over the 
squares (ie children of the rows). The code says if the row's index is even then the first square
of that row is given the class of "odd-squares", and every alternate square of that row is
given the class of "even-squares", and then the reverse for rows with indices that are odd.
This is is purely for styling in the checkerboard pattern, and to distinguish the code applied to 
every alternate row of the grid. If the same code was applied to every row the grid would have
vertical stripes and not a chequered effect. */
function checkerboard() {
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
// simple loop to assign squares with class of "bomb" the skull font awesome icon as innerHTML
function bombIcon() {
    let squares = document.getElementsByClassName("squares");  
    for (square of squares) { 
        if (square.classList.contains("bomb")) {
            square.innerHTML = `<i class="fas fa-skull"></i>`;
        }
    }
}
// Assigns the starting value of the number flags in hand counter depending on the selected difficulty
function flags() {
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML = selectedBombs;
}