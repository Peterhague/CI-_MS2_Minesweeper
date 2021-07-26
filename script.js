let randomSquares = []; //creates the array to be populated by the randomise function
let grid = document.getElementById("grid");
let gridRow = ""; //these will be the rows (divs) to be appended to the minesweeper grid
let difficulty = document.getElementById("difficulty"); //targets the dropdown selector per the html file
let gridRowsList = document.getElementsByClassName("grid-rows"); // to create an array of the grid rows to iterate over
let scoreContainer = document.getElementById("score-container"); // gets the div to be populated by the remaining flags tally
let play = document.getElementById("play"); // gets the start game button from the html file
play.addEventListener("click", generatedGridRows); // generates the number of rows as per the difficulty selected
play.addEventListener("click", randomise);
play.addEventListener("click", newGame);
play.addEventListener("click", assignHTML);
play.addEventListener("click", flags);
function generatedGridRows() {
    let selectedDifficulty = difficulty.value; //being the selected difficulty option in the dropdown
    if (selectedDifficulty == "Easy") {
        for (i = 0; i < 9; i++) {
            gridRow = document.createElement("div");
            gridRow.classList.add("grid-rows", `grid-row-${i}`) // to be able to identify the row precisely if necessary
            grid.appendChild(gridRow);
        } // this loop creates 9 rows and adds them to the grid - EASY mode
    } else if (selectedDifficulty == "Medium") {
        for (i = 0; i < 15; i++) {
            gridRow = document.createElement("div");
            gridRow.classList.add("grid-rows", `grid-row-${i}`) // to be able to identify the row precisely if necessary
            grid.appendChild(gridRow);
        } // this loop creates 15 rows and adds them to the grid - MEDIUM mode
    } else if (selectedDifficulty == "Medium") {
        for (i = 0; i < 20; i++) {
            gridRow = document.createElement("div");
            gridRow.classList.add("grid-rows", `grid-row-${i}`) // to be able to identify the row precisely if necessary
            grid.appendChild(gridRow);
        } // this loop creates 20 rows and adds them to the grid - HARD mode
    }
}
function randomise() {
    let selectedDifficulty = difficulty.value;
    randomSquares = []; // to be populated by array of random numbers to be iterated to randomly place the "mines"
}