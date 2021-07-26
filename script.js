let randomSquares = []; //creates the array to be populated by the randomise function
let grid = document.getElementById("grid");
let gridRow = ""; //these will be the rows (divs) to be appended to the minesweeper grid
let difficulty = document.getElementById("difficulty"); //targets the dropdown selector per the html file
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
        } // this loop creates 15 rows and adds them to the grid - MEDIUM mode
    }
}