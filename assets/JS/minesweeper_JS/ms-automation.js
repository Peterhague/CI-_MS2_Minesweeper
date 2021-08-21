/*squares surrounding the square clicked will be assigned the class of "clicked-square-radius"
@param squares [divs constituting minesweeper grid squares]
@param that [minesweeper grid square clicked]
*/
function minesweepRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");//sqaure to bottom-left of clicked square
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");//square to square to top-left of clicked square
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
}
/*squares surrounding the square clicked will be assigned the class of "clicked-square-radius"
@param squares [divs constituting minesweeper grid squares]
@param that [minesweeper grid square clicked]
*/
function minesweepLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");//square top-right of clicked square
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");//square bottom-right of clicked square
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
}
/*squares surrounding the square clicked will be assigned the class of "clicked-square-radius"
@param squares [divs constituting minesweeper grid squares]
@param that [minesweeper grid square clicked]
*/
function minesweepTopLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");//square bottom-right of clicked square
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
}
/*squares surrounding the square clicked will be assigned the class of "clicked-square-radius"
@param squares [divs constituting minesweeper grid squares]
@param that [minesweeper grid square clicked]
*/
function minesweepTop(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");//sqaure to bottom-left of clicked square
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
}
/*squares surrounding the square clicked will be assigned the class of "clicked-square-radius"
@param squares [divs constituting minesweeper grid squares]
@param that [minesweeper grid square clicked]
*/
function minesweepTopRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");//sqaure to bottom-left of clicked square
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
}
/*squares surrounding the square clicked will be assigned the class of "clicked-square-radius"
@param squares [divs constituting minesweeper grid squares]
@param that [minesweeper grid square clicked]
*/
function minesweepBottom(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");//square top-right of clicked square
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");//square to square to top-left of clicked square
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
}
/*squares surrounding the square clicked will be assigned the class of "clicked-square-radius"
@param squares [divs constituting minesweeper grid squares]
@param that [minesweeper grid square clicked]
*/
function minesweepBottomLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");//square top-right of clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
}
/*squares surrounding the square clicked will be assigned the class of "clicked-square-radius"
@param squares [divs constituting minesweeper grid squares]
@param that [minesweeper grid square clicked]
*/
function minesweepBottomRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");//square to square to top-left of clicked square
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
}
/*squares surrounding the square clicked will be assigned the class of "clicked-square-radius"
@param squares [divs constituting minesweeper grid squares]
@param that [minesweeper grid square clicked]
*/
function minesweepMiddle(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");//square top-right of clicked square
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");//square top-left of clicked square
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");//square bottom-left of clicked square
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");//square bottom-right of clicked square
}
/*this function automatically 'clicks' on squares with zero mines around them that surround a clicked square that
also has zero mines around it. It's mainly to aid good UX, so that the player doesn't need to laboriously click on the
squares with no mines when they already know for certain that they're safe.
Each time a square is clicked on (and it doesn't have a mine...) the code assigns the surrounding mines with the class of
'clicked-square-radius' (see above). The minesweep function also removes that class from every square on each new click.
This function accesses all the squares with that class, and assigns them a new class with its own id as part of the template.
It's these squares that are then selected to be automatically clicked. This is so only the squares surrounding the last-clicked
square are operated on (hence the removal of the clicked-square-radius class) but also so that the elected squares aren't 
'lost' when that class is removed, becuase the class the automation is referring to is different.
@param that [minesweeper grid square clicked]
*/
function automatedClick(that) {
    let clickedSquareRadius = document.getElementsByClassName("clicked-square-radius");
    for (square of clickedSquareRadius) {
        square.classList.add(`csr-${that.id}`);
    }   
    let automatedClickers = document.getElementsByClassName(`csr-${that.id}`);
    for (clicker of automatedClickers) {   
        clicker.click();
        clicker.classList.add("automatically-clicked");
    }
}

