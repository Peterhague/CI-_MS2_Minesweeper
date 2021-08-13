function counter() {
    let randomSquaresAll = [];
    let squares = document.getElementsByClassName("squares");
    if (this.classList.contains("no-bomb")) {
        let clearedSquares = document.getElementsByClassName("selected");
        gameOverClassifier(randomSquaresAll, squares, clearedSquares);
    }    
}
function gameOverClassifier(randomSquaresAll, squares, clearedSquares) {
    if (clearedSquares.length > (selectedSquares - selectedBombs - 1)) {
        victorySquaresSmiley(squares);
        generateArrayRandomSquares(randomSquaresAll,selectedSquares);
        for (let j = 0; j < selectedSquares; j++) {
            victoryStyleSquaresSequentially(j, randomSquaresAll, squares);
        }
    }
}
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
function generateArrayRandomSquares(emptyArray, arrayLength) {
    while (emptyArray.length < arrayLength) {// populate random numbers array until it's 81 numbers long
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
        for (square of squares) {
            square.classList.add("invisible-text");
            square.classList.remove("selected");
        }
        for (flag of flaggedSquares) {
            if (flag.classList.contains("no-bomb")) {
                flag.style.color = "rgba(0, 0, 0, 0.0)";
            }
        }
        let randomSquaresAll = [];
        while (randomSquaresAll.length < selectedSquares) {// populate random numbers array until same length as the number of squares in grid
            let x = Math.floor(Math.random()*selectedSquares);
            if (randomSquaresAll.includes(x) === false) {
                randomSquaresAll.push(x);
            }
        }
        for (let j = 0; j < selectedSquares; j++) {
            task(j);
        }
        function task(j) {            
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
        setTimeout(function() {            
            for (square of squares) {
                square.style.backgroundColor = "black";
                square.style.color = "red";
                square.innerHTML = `<i class="fas fa-skull"></i>`;
            };
        }, (selectedRows * 100) + 500);
        setTimeout(function() {                
            addPlayFunctions();
        }, (selectedRows * 100) + 700);
    }  
}