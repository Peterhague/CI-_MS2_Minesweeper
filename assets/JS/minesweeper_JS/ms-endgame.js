/* event handler for click of square. If the square clicked on doesn't have a bomb, this and all other
successfully cleared squares are collected in a variable clearedSquares*/
function counter() {
    let randomSquaresAll = [];
    let squares = document.getElementsByClassName("squares");
    if (this.classList.contains("no-bomb")) {
        let clearedSquares = document.getElementsByClassName("selected");
        gameOverClassifier(randomSquaresAll, squares, clearedSquares);
    }    
}
/*called from counter fn: checks the length of the clearedSquares variable. If it's greater than the total number of
squares, less than the total amount of 'mine' squares, then all non-mine squares have been successfully cleared.
The code then calls the various 'victory' functions to indicate success*/
function gameOverClassifier(randomSquaresAll, squares, clearedSquares) {
    if (clearedSquares.length > (selectedSquares - selectedBombs - 1)) {
        victorySquaresSmiley(squares);
        generateArrayRandomSquares(randomSquaresAll,selectedSquares);
        for (let j = 0; j < selectedSquares; j++) {
            victoryStyleSquaresSequentially(j, randomSquaresAll, squares);
        }
    }
}
/* on winning the game: all event listeners removed from the squares, inner html changed to a smiley icon,
and their colour changed to 'invisible' text.*/
function victorySquaresSmiley(squares) {
    for (square of squares) {
        square.style.color = "rgba(0,0,0,0.0)";
        square.innerHTML = `<i class="fas fa-laugh-squint"></i>`;
        square.removeEventListener("click", minesweep);
        square.removeEventListener("click", addFlags);
        square.removeEventListener("click", gameOverOne);
        square.removeEventListener("click", gameOverTwo);
    }
}
/* generates an array of unique random numbers between 0 and the # of squares on the grid, until it's the same
length as the number of squares on the grid (ie a random list of the square's ids).*/
function generateArrayRandomSquares(emptyArray, arrayLength) {
    while (emptyArray.length < arrayLength) {
        let x = Math.floor(Math.random()*arrayLength);
        if (emptyArray.includes(x) === false) {
            emptyArray.push(x);
        }
    }
}
function victoryStyleSquaresSequentially(j, randomSquaresAll, squares) {      
    setTimeout(function() {
        squares[randomSquaresAll[j]].classList.remove("selected", "hovered-squares", "even-squares", "odd-squares", "flagged");
        if (j % 3 === 0) {
            squares[randomSquaresAll[j]].classList.add("yellow-square");
            squares[randomSquaresAll[j]].style.color = "rgba(0,0,0,1)";
        } else if (j % 3 > 0 && j % 2 === 0) {
            squares[randomSquaresAll[j]].classList.add("orange-square");
            squares[randomSquaresAll[j]].style.color = "rgba(0,0,0,1)";
        } else {
            squares[randomSquaresAll[j]].classList.add("pink-square");
            squares[randomSquaresAll[j]].style.color = "rgba(0,0,0,1)";
        }
        squares[j].removeEventListener("click", minesweep);                    
    }, 7 * j);
    victorySquaresSmileysWhite(squares);
} 
function victorySquaresSmileysWhite(squares) {
    setTimeout(function() {            
        for (square of squares) {
            square.style.backgroundColor = "white";
            square.style.color = "rgb(17, 231, 238)";
        };
    }, 2000);
}
function gameOverOne() {
    let randomSquaresBombs = [];
    let bombs = document.getElementsByClassName("bomb");
    if (this.classList.contains("bomb") && !this.classList.contains("flagged")) {
        for (bomb of bombs) {
            bomb.innerHTML = `<i class="fas fa-skull"></i>`
        }
        generateArrayRandomSquares(randomSquaresBombs,selectedBombs);
        for (let j = 0; j < selectedBombs; j++) {
            defeatStyleBombSquaresSequentially(j, bombs, randomSquaresBombs);
        }
    }          
}
function defeatStyleBombs(squares, flaggedSquares) {
    for (square of squares) {
        square.classList.add("invisible-text");
        square.classList.remove("selected");
    }
    for (flag of flaggedSquares) {
        if (flag.classList.contains("no-bomb")) {
            flag.style.color = "rgba(0, 0, 0, 0.0)";
        }
    }
}
function defeatStyleBombSquaresSequentially(j, bombs, randomSquaresBombs) {
    setTimeout(function() {
        bombs[randomSquaresBombs[j]].classList.add("text-red");
        bombs[randomSquaresBombs[j]].classList.remove("invisible-text");
        }, 10 * j);
}
function gameOverTwo() {
    let squares = document.getElementsByClassName("squares");// gets all the squares on the grid
    let flaggedSquares = document.getElementsByClassName("flagged");
    if (this.classList.contains("bomb") && !this.classList.contains("flagged")) {
        removePlayFunctions();
        //ie player has clicked on a mine without a flag, and it's game over
        defeatStyleBombs(squares, flaggedSquares);
        let randomSquaresAll = [];
        generateArrayRandomSquares(randomSquaresAll, selectedSquares);
        for (let j = 0; j < selectedSquares; j++) {
            defeatStyleSquaresSequentially(j, squares, randomSquaresAll);
        }
        defeatStyleChangesFinal(squares);
        setTimeout(function() {                
            addPlayFunctions();
        }, (selectedRows * 100) + 700);
    }  
}
function defeatStyleSquaresSequentially(j, squares, randomSquaresAll) {
    setTimeout(function() {
        squares[randomSquaresAll[j]].classList.remove("hovered-squares", "even-squares", "odd-squares", "blue");
        if (j % 3 === 0) {
            squares[randomSquaresAll[j]].classList.add("black-square");
        } else if (j % 3 > 0 && j % 2 === 0) {
            squares[randomSquaresAll[j]].classList.add("grey-square");
        } else {
            squares[randomSquaresAll[j]].classList.add("white-square");
        }
        squares[j].removeEventListener("click", minesweep);                    
    }, 5 * j);
}
function defeatStyleChangesFinal(squares) {
    setTimeout(function() {            
        for (square of squares) {
            square.style.backgroundColor = "black";
            square.style.color = "red";
            square.innerHTML = `<i class="fas fa-skull"></i>`;
        };
    }, (selectedRows * 100) + 500);
}