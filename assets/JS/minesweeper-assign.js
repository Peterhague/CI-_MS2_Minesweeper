function assignHTML() {
/* This function assigns the numbers to each square that represent how many of that square's surrounding squares
contain mines. It does so by getting each square's id and checking the "mine" content of squares with ids that 
define them as being in the checking square's radius/orbit etc. This can be achieved because each square has an id
that can identify its position in the grid, and therefore its position relative to every other square. In a 400 square
"Hard" grid, the top left square has an id of 0 and the bottom right has an id of 399, with the sequence running left
to right along each row in turn.

This is a complex function because the number and relative position of the squares to evaluate vary depending on
(a) the size of the grid and
(b) whether the square is in the middle of the grid, on the edge, or in a corner.

-- squareSentinel is the square checking its neighbours
-- squareTarget are the squares being checked

The value of the the total variable is increased by one for every "mine" found. This value at the end of the outer loop
is then assigned as the sentinelSquare's inner html. */
    let squares = document.getElementsByClassName("squares");
    for (squareSentinel of squares) {
        if (squareSentinel.classList.contains("right-edge") || squareSentinel.classList.contains("top-right")) {
        /*for squares with ids longer than 1 and divisible by 9 after the addition of 1 to its total.
        This captures the squares at the right-hand edge of the grid*/
            assignHTMLRight(squares, squareSentinel); 
        } else if (squareSentinel.classList.contains("left-edge") || squareSentinel.classList.contains("bottom-left")) {
        /*for squares with ids longer than 1, and divisible by 9. This captures the squares at the left-hand edge of the grid*/
            assignHTMLLeft(squares, squareSentinel);
        } else if (squareSentinel.classList.contains("top-left")) {
        //captures the top-left square only
            assignHTMLTopLeft(squares, squareSentinel);             
        } else {
        /*applies to all other squares in grid not picked out above*/
            assignHTMLMiddle(squares, squareSentinel);
        }        
    }
}
function assignHTMLRight(squares, inputSquare) {
    let total = 0;
    for (squareTarget of squares) {
        if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + selectedRows) && squareTarget.classList.contains("bomb")) {// squareTarget is below
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + (selectedRows -1)) && squareTarget.classList.contains("bomb")) {// squareTarget is to bottom left
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - 1) && squareTarget.classList.contains("bomb")) {// squareTarget is to left
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - selectedRows) && squareTarget.classList.contains("bomb")) {// squareTarget is above
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - (selectedRows +1)) && squareTarget.classList.contains("bomb")) {// squareTarfet is to top left
            total += 1;      
        } 
    }
    inputSquare.innerHTML = total;
}
function assignHTMLLeft(squares, inputSquare) {
    let total = 0;
    for (squareTarget of squares) {
        if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + selectedRows) && squareTarget.classList.contains("bomb")) {// squareTarget is below
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + (selectedRows +1)) && squareTarget.classList.contains("bomb")) {// squareTarget is to bottom right 
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + 1) && squareTarget.classList.contains("bomb")) {// squareTarget is to right
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - selectedRows) && squareTarget.classList.contains("bomb")) {// squareTarget is above
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - (selectedRows -1)) && squareTarget.classList.contains("bomb")) {// squareTarget is to top right
            total += 1;
        }
    } 
    inputSquare.innerHTML = total;
}
function assignHTMLTopLeft(squares, inputSquare) {
    let total = 0;
    for (squareTarget of squares) {
        if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + 1) && squareTarget.classList.contains("bomb")) {// squareTarget is to right
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + selectedRows) && squareTarget.classList.contains("bomb")) {// squareTarget is below
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + (selectedRows +1)) && squareTarget.classList.contains("bomb")) {// squareTarget is to bottom right
            total += 1;
        } 
    } 
    inputSquare.innerHTML = total;
}
function assignHTMLMiddle(squares, inputSquare) {
    let total = 0;
    for (squareTarget of squares) {
        if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + selectedRows) && squareTarget.classList.contains("bomb")) {// squareTarget is below
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + (selectedRows +1)) && squareTarget.classList.contains("bomb")) {//squareTarget is to bottom right
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + (selectedRows -1)) && squareTarget.classList.contains("bomb")) {// squareTarget is to bottom left
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - selectedRows) && squareTarget.classList.contains("bomb")) {// squareTarget is above
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - (selectedRows -1)) && squareTarget.classList.contains("bomb")) {// squareTarget is top right
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - (selectedRows +1)) && squareTarget.classList.contains("bomb")) {// squareTarget is to top left
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - 1) && squareTarget.classList.contains("bomb")) {// squareTarget is to left
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + 1) && squareTarget.classList.contains("bomb")) {// squareTarget is to right
            total += 1;
        }
    }
    inputSquare.innerHTML = total;
}