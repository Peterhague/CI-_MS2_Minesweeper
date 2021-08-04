function counter() {
    let randomSquaresAll = [];
    let squares = document.getElementsByClassName("squares");
    if (this.classList.contains("no-bomb")) {
        let clearedSquares = document.getElementsByClassName("selected");
        if (clearedSquares.length > (selectedSquares - selectedBombs - 1)) {
            while (randomSquaresAll.length < selectedSquares) {// populate random numbers array until it's 81 numbers long
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
                    squares[j].innerHTML = `<i class="fas fa-laugh-squint"></i>`;
                    squares[j].style.color = rgba(0,0,0,0.0);
                    squares[randomSquaresAll[j]].classList.add("text-black");
                    squares[randomSquaresAll[j]].classList.remove("selected", "hovered-squares", "even-squares", 
                    "odd-squares", "text-blue", "text-orange", "text-green", "text-purple", "text-pink");
                    if (j % 3 === 0) {
                        squares[randomSquaresAll[j]].classList.add("yellow-square");
                    } else if (j % 3 > 0 && j % 2 === 0) {
                        squares[randomSquaresAll[j]].classList.add("orange-square");
                    } else {
                        squares[randomSquaresAll[j]].classList.add("pink-square");
                    }
                    squares[j].removeEventListener("click", minesweep);                    
                }, 7 * j);
                setTimeout(function() {            
                    for (square of squares) {
                        square.style.backgroundColor = "white";
                        square.style.color = "rgb(17, 231, 238)";
                    };
                }, 2000);
            }
        }
    }    
}
function gameOverOne() {
    let randomSquaresBombs = [];
    let bombs = document.getElementsByClassName("bomb");
    if (this.classList.contains("bomb") && !this.classList.contains("flagged")) {
        for (bomb of bombs) {
            bomb.innerHTML = `<i class="fas fa-skull"></i>`
        }
        while (randomSquaresBombs.length < selectedBombs) {
            let x = Math.floor(Math.random()*selectedBombs);
            if (randomSquaresBombs.includes(x) === false) {
                randomSquaresBombs.push(x);
            }
        }
        for (let j = 0; j < selectedBombs; j++) {
            task(j);
        }
        function task(j) {            
            setTimeout(function() {
                bombs[randomSquaresBombs[j]].classList.add("text-red");
                bombs[randomSquaresBombs[j]].classList.remove("invisible-text");
                }, 10 * j);
        }  
    }          
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