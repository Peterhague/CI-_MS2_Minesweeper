function minesweepRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
}
function minesweepLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
}
function minesweepTopLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
}
function minesweepTop(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
}
function minesweepTopRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
}
function minesweepBottom(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
}
function minesweepBottomLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
}
function minesweepBottomRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
}
function minesweepMiddle(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");
}
function automatedClick(that) {
    let clickedSquareRadius = document.getElementsByClassName("clicked-square-radius");
    for (square of clickedSquareRadius) {
        square.classList.add(`csr-${that.id}`)
    }   
    let automatedClickers = document.getElementsByClassName(`csr-${that.id}`)     
    for (clicker of automatedClickers) {   
        if (parseInt(that.innerHTML) === 0) {
            clicker.click();
        }
    }
}