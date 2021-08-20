/* This function iterates through the squares of the grid and checks its position by reference to the class
attributed to it via the assignRelativePosition function. It then calls the appropriate function to
'count' the mines in its surrounding squares and assign the square an innerHTML of that number (of mines).
There are different functions depending on position because the number of surrounding mines and their
relative ids change depending on the square's position in the grid.*/
function assignHTML() {
    let squares = document.getElementsByClassName("squares");
    for (squareSentinel of squares) {
        if (squareSentinel.classList.contains("right-edge") || squareSentinel.classList.contains("top-right")) {
            assignHTMLRight(squares, squareSentinel); 
        } else if (squareSentinel.classList.contains("left-edge")) {
            assignHTMLLeft(squares, squareSentinel);
        } else if (squareSentinel.classList.contains("bottom-left")) {
            assignHTMLBottomLeft(squares, squareSentinel);
        } else if (squareSentinel.classList.contains("bottom-right")) {
            assignHTMLBottomRight(squares, squareSentinel);
        } else if (squareSentinel.classList.contains("top-left")) {
            assignHTMLTopLeft(squares, squareSentinel);             
        } else {
            assignHTMLMiddle(squares, squareSentinel);
        }        
    }
}
/*counts the surrounding squares for mines and assigns HTML if the square is on the right edge of the grid
@param squares [divs, minesweeper grid squares]
@param inputSquare [square clicked on]
*/
function assignHTMLRight(squares, inputSquare) {
    let total = 0;
    for (squareTarget of squares) {
        if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + selectedRows) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is below
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + (selectedRows -1)) &&
        squareTarget.classList.contains("bomb")) {// squareTarget is to bottom left
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - 1) &&
        squareTarget.classList.contains("bomb")) {// squareTarget is to left
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - selectedRows) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is above
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - (selectedRows +1)) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is to top left
            total += 1;      
        } 
    }
    inputSquare.innerHTML = total;
}
/*counts the surrounding squares for mines and assigns HTML if the square is on the left edge of the grid
@param squares [divs, minesweeper grid squares]
@param inputSquare [square clicked on]
*/
function assignHTMLLeft(squares, inputSquare) {
    let total = 0;
    for (squareTarget of squares) {
        if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + selectedRows) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is below
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + (selectedRows +1)) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is to bottom right 
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + 1) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is to right
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - selectedRows) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is above
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - (selectedRows -1)) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is to top right
            total += 1;
        }
    } 
    inputSquare.innerHTML = total;
}
/*counts the surrounding squares for mines and assigns HTML if the square is in the bottom left corner of the grid
@param squares [divs, minesweeper grid squares]
@param inputSquare [square clicked on]
*/
function assignHTMLBottomLeft(squares, inputSquare) {
    let total = 0;
    for (squareTarget of squares) {
        if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + 1) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is to right
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - selectedRows) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is below
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - (selectedRows -1)) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is to bottom right
            total += 1;
        } 
    } 
    inputSquare.innerHTML = total;
}
/*counts the surrounding squares for mines and assigns HTML if the square is in the bottom right corner of the grid
@param squares [divs, minesweeper grid squares]
@param inputSquare [square clicked on]
*/
function assignHTMLBottomRight(squares, inputSquare) {
    let total = 0;
    for (squareTarget of squares) {
        if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - 1) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is to right
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - selectedRows) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is below
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) - (selectedRows +1)) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is to bottom right
            total += 1;
        } 
    } 
    inputSquare.innerHTML = total;
}
/*counts the surrounding squares for mines and assigns HTML if the square is in the top left corner of the grid
@param squares [divs, minesweeper grid squares]
@param inputSquare [square clicked on]
*/
function assignHTMLTopLeft(squares, inputSquare) {
    let total = 0;
    for (squareTarget of squares) {
        if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + 1) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is to right
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + selectedRows) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is below
            total += 1;
        } else if (parseInt(squareTarget.id) === (parseInt(inputSquare.id) + (selectedRows +1)) && 
        squareTarget.classList.contains("bomb")) {// squareTarget is to bottom right
            total += 1;
        } 
    } 
    inputSquare.innerHTML = total;
}
/*counts the surrounding squares for mines and assigns HTML if the square is anywhere in the middle of the grid
@param squares [divs, minesweeper grid squares]
@param inputSquare [square clicked on]
*/
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
//assigns each square a descriptive class for its position in the grid, based on its id (iself based on its position)
function assignRelativePosition() {
    let squares = document.getElementsByClassName("squares");
    for (square of squares) {
        let sqid = parseInt(square.id);
        if (sqid === 0) {//if square is top left corner
            square.classList.add("top-left");
        } else if (sqid > 0 && sqid < (selectedRows -1)) {//if square has id between 1 and the number of squares in each row -1
            square.classList.add("top-edge")//ie it's on top row but not left corner and not right corner
        } else if (sqid === selectedRows -1) {//if square has id = to number of squares in each row, -1
            square.classList.add("top-right");
        } else if (sqid > 0 && sqid % selectedRows === 0 && sqid != (selectedSquares - selectedRows)) {//if it's not top left,
            square.classList.add("left-edge");//but its id is divisible by the # of rows, and it's not bottom left
        } else if (sqid > 0 && (sqid +1) % selectedRows === 0 && sqid != (selectedSquares - 1)) {//its id+1 is divisible by
            square.classList.add("right-edge");//the # of rows and its id isn't the # of squares -1 ie not bottom right
        } else if (sqid === (selectedSquares - selectedRows)) {
            square.classList.add("bottom-left");
        } else if (sqid === (selectedSquares - 1)) {
            square.classList.add("bottom-right");
        } else if (sqid > (selectedSquares - selectedRows) && sqid < (selectedSquares - 1)) {
            square.classList.add("bottom-edge");
        } else {
            square.classList.add("middle");
        }
    }
}