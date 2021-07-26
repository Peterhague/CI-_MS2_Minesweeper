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
    if (selectedDifficulty == "Easy") {
        while (randomSquares.length < 15) {
            let y = Math.floor(Math.random()*81);
            if (randomSquares.includes(y) === false) {
                randomSquares.push(y);
            }  
        }
    } else if (selectedDifficulty == "Medium") {
        while (randomSquares.length < 40) {
            let y = Math.floor(Math.random()*225);
            if (randomSquares.includes(y) === false) {
                randomSquares.push(y);
            }  
        }
    } else if (selectedDifficulty == "Hard") {
        while (randomSquares.length < 99) {
            let y = Math.floor(Math.random()*400);
            if (randomSquares.includes(y) === false) {
                randomSquares.push(y);
        }  
    }
    }/*Adds random numbers to the randomSquares variable (15 for easy, 40 for medium and 99 for hard). 
    Multiplies each random number by the number of squares on the grid, and pushes them to the array 
    IF the random number y does NOT appear in the list already, ie so that each number in the array
    is unique. This ensures that ultimately the grids will have the correct number of mines, and no
    squares with > 1 mine.*/
}
function newGame() {
    let selectedDifficulty = difficulty.value;
    let existingRows = document.getElementsByClassName("grid-rows");
    for (rows of existingRows) {
      rows.innerHTML = "";
    } // nulls the rows code for each press of the play button, effectively a reset
    if (selectedDifficulty == "Easy") {
        for (x = 0; x < 9; x++) {
            for (y = 0; y < 9; y++) {
                let squares = document.createElement("button");
                squares.innerHTML = "ok";
                squares.classList.add("squares");
                squares.classList.add("hovered-squares");
                let squaresNumber = (y*9)+x;
                if (randomSquares.includes(squaresNumber)) {
                    squares.classList.add("bomb");
                } else {
                    squares.classList.add("no-bomb");
                } 
                let bombSquares = document.getElementsByClassName("bomb");
                squares.addEventListener("click", minesweep);
                squares.addEventListener("click", counter);
                squares.addEventListener("click", gameOverOne);
                squares.addEventListener("click", gameOverTwo);
                $(squares).mousedown(function(event) {
                    if (!this.classList.contains("selected")) {
                        switch (event.which) {
                        case 3:
                            if (this.classList.contains("even-squares")) {
                                $(this).removeClass("even-squares");
                                $(this).removeClass("hovered-squares");
                                $(this).addClass("evenReserved");
                                $(this).addClass("flagged");
                                $(this).addClass("text-white");
                                $(this).addClass("grey");
                                $(this).attr("data-id", this.innerHTML);
                                $(this).html(`<i class="fas fa-flag"></i>`);
                                scoreContainer.innerHTML = scoreContainer.innerHTML - 1;
                            } else if (this.classList.contains("odd-squares")) {
                                $(this).removeClass("odd-squares");
                                $(this).removeClass("hovered-squares");
                                $(this).addClass("oddReserved");
                                $(this).addClass("flagged");
                                $(this).addClass("text-white");
                                $(this).addClass("grey");
                                $(this).attr("data-id", this.innerHTML);
                                $(this).html(`<i class="fas fa-flag"></i>`);
                                scoreContainer.innerHTML = scoreContainer.innerHTML - 1;
                            } else if (this.classList.contains("flagged") && this.classList.contains("evenReserved")) {
                                $(this).removeClass("flagged");
                                $(this).removeClass("grey");
                                $(this).removeClass("text-white");
                                $(this).removeClass("evenReserved");
                                $(this).addClass("even-squares");
                                $(this).addClass("hovered-squares");
                                $(this).html($(this).attr("data-id"));
                                scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
                            } else if (this.classList.contains("flagged") && this.classList.contains("oddReserved")) {
                                $(this).removeClass("flagged");
                                $(this).removeClass("grey");
                                $(this).removeClass("text-white");
                                $(this).removeClass("oddReserved");
                                $(this).addClass("odd-squares");
                                $(this).addClass("hovered-squares");
                                $(this).html($(this).attr("data-id"));
                                scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
                            }
                        }
                    }
                });
                squares.id = squaresNumber;
                gridRowsList[y].appendChild(squares);
            }   
        }
    } else if (selectedDifficulty == "Medium") {
    for (x = 0; x < 15; x++) {
      for (y = 0; y < 15; y++) {
        let squares = document.createElement("button");
        squares.innerHTML = "ok";
        squares.classList.add("squares");
        squares.classList.add("hovered-squares");
        let squaresNumber = (y*15)+x;
        if (randomSquares.includes(squaresNumber)) {
          squares.classList.add("bomb");
        } else {
          squares.classList.add("no-bomb");
        } 
        let bombSquares = document.getElementsByClassName("bomb");
        squares.addEventListener("click", minesweep);
        squares.addEventListener("click", counter);
        squares.addEventListener("click", gameOverOne);
        squares.addEventListener("click", gameOverTwo);
        $(squares).mousedown(function(event) {
        if (!this.classList.contains("selected")) {
        switch (event.which) {
          case 3:
            if (this.classList.contains("even-squares")) {
              $(this).removeClass("even-squares");
              $(this).removeClass("hovered-squares");
              $(this).addClass("evenReserved");
              $(this).addClass("flagged");
              $(this).addClass("text-white");
              $(this).addClass("grey");
              $(this).attr("data-id", this.innerHTML);
              $(this).html(`<i class="fas fa-flag"></i>`);
              scoreContainer.innerHTML = scoreContainer.innerHTML - 1;
            } else if (this.classList.contains("odd-squares")) {
              $(this).removeClass("odd-squares");
              $(this).removeClass("hovered-squares");
              $(this).addClass("oddReserved");
              $(this).addClass("flagged");
              $(this).addClass("text-white");
              $(this).addClass("grey");
              $(this).attr("data-id", this.innerHTML);
              $(this).html(`<i class="fas fa-flag"></i>`);
              scoreContainer.innerHTML = scoreContainer.innerHTML - 1;
            } else if (this.classList.contains("flagged") && this.classList.contains("evenReserved")) {
              $(this).removeClass("flagged");
              $(this).removeClass("grey");
              $(this).removeClass("text-white");
              $(this).removeClass("evenReserved");
              $(this).addClass("even-squares");
              $(this).addClass("hovered-squares");
              $(this).html($(this).attr("data-id"));
              scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
            } else if (this.classList.contains("flagged") && this.classList.contains("oddReserved")) {
              $(this).removeClass("flagged");
              $(this).removeClass("grey");
              $(this).removeClass("text-white");
              $(this).removeClass("oddReserved");
              $(this).addClass("odd-squares");
              $(this).addClass("hovered-squares");
              $(this).html($(this).attr("data-id"));
              scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
            }
          }
        }
        });
        squares.id = squaresNumber;
        gridRowsList[y].appendChild(squares);
        }   
      }
    } else if (selectedDifficulty == "Hard") {
    for (x = 0; x < 20; x++) {
      for (y = 0; y < 20; y++) {
        let squares = document.createElement("button");
        squares.innerHTML = "ok";
        squares.classList.add("squares");
        squares.classList.add("hovered-squares");
        let squaresNumber = (y*20)+x;
        if (randomSquares.includes(squaresNumber)) {
          squares.classList.add("bomb");
        } else {
          squares.classList.add("no-bomb");
        } 
        let bombSquares = document.getElementsByClassName("bomb");
        squares.addEventListener("click", minesweep);
        squares.addEventListener("click", counter);
        squares.addEventListener("click", gameOverOne);
        squares.addEventListener("click", gameOverTwo);
        $(squares).mousedown(function(event) {
        if (!this.classList.contains("selected")) {
        switch (event.which) {
          case 3:
            if (this.classList.contains("even-squares")) {
              $(this).removeClass("even-squares");
              $(this).removeClass("hovered-squares");
              $(this).addClass("evenReserved");
              $(this).addClass("flagged");
              $(this).addClass("text-white");
              $(this).addClass("grey");
              $(this).attr("data-id", this.innerHTML);
              $(this).html(`<i class="fas fa-flag"></i>`);
              scoreContainer.innerHTML = scoreContainer.innerHTML - 1;
            } else if (this.classList.contains("odd-squares")) {
              $(this).removeClass("odd-squares");
              $(this).removeClass("hovered-squares");
              $(this).addClass("oddReserved");
              $(this).addClass("flagged");
              $(this).addClass("text-white");
              $(this).addClass("grey");
              $(this).attr("data-id", this.innerHTML);
              $(this).html(`<i class="fas fa-flag"></i>`);
              scoreContainer.innerHTML = scoreContainer.innerHTML - 1;
            } else if (this.classList.contains("flagged") && this.classList.contains("evenReserved")) {
              $(this).removeClass("flagged");
              $(this).removeClass("grey");
              $(this).removeClass("text-white");
              $(this).removeClass("evenReserved");
              $(this).addClass("even-squares");
              $(this).addClass("hovered-squares");
              $(this).html($(this).attr("data-id"));
              scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
            } else if (this.classList.contains("flagged") && this.classList.contains("oddReserved")) {
              $(this).removeClass("flagged");
              $(this).removeClass("grey");
              $(this).removeClass("text-white");
              $(this).removeClass("oddReserved");
              $(this).addClass("odd-squares");
              $(this).addClass("hovered-squares");
              $(this).html($(this).attr("data-id"));
              scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
            }
          }
        }
        });
        squares.id = squaresNumber;
        gridRowsList[y].appendChild(squares);
        }   
      }
    }
    if (selectedDifficulty == "Easy") {
      for (let i = 0; i < 9; i++) {
        for (let x = 0; x < 9; x++) {
          if (i % 2 === 0 && x % 2 === 0) {
            gridRowsList[i].children[x].classList.add("odd-squares");
          }   else if (i % 2 === 0 && x % 2 > 0) {
            gridRowsList[i].children[x].classList.add("even-squares");
          } 
        }
        for (let x = 0; x < 9; x++) {
          if (i % 2 > 0 && x % 2 > 0) {
            gridRowsList[i].children[x].classList.add("odd-squares");
          } else if (i % 2 > 0 && x % 2 === 0) {
            gridRowsList[i].children[x].classList.add("even-squares");
          }
        }
      } 
    } else if (selectedDifficulty == "Medium") {
      for (let i = 0; i < 15; i++) {
        for (let x = 0; x < 15; x++) {
          if (i % 2 === 0 && x % 2 === 0) {
            gridRowsList[i].children[x].classList.add("odd-squares");
          }   else if (i % 2 === 0 && x % 2 > 0) {
            gridRowsList[i].children[x].classList.add("even-squares");
          } 
        }
        for (let x = 0; x < 15; x++) {
          if (i % 2 > 0 && x % 2 > 0) {
            gridRowsList[i].children[x].classList.add("odd-squares");
          } else if (i % 2 > 0 && x % 2 === 0) {
            gridRowsList[i].children[x].classList.add("even-squares");
          }
        }
      } 
    } else if (selectedDifficulty == "Hard") {
      for (let i = 0; i < 20; i++) {
        for (let x = 0; x < 20; x++) {
          if (i % 2 === 0 && x % 2 === 0) {
            gridRowsList[i].children[x].classList.add("odd-squares");
          }   else if (i % 2 === 0 && x % 2 > 0) {
            gridRowsList[i].children[x].classList.add("even-squares");
          } 
        }
        for (let x = 0; x < 20; x++) {
          if (i % 2 > 0 && x % 2 > 0) {
            gridRowsList[i].children[x].classList.add("odd-squares");
          } else if (i % 2 > 0 && x % 2 === 0) {
            gridRowsList[i].children[x].classList.add("even-squares");
          }
        }
      } 
    } 
  }
  