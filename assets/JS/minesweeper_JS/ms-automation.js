function minesweepRight(squares, that) {
    //squares surrounding the square clicked will be assigned the class of "clicked-square-radius"
    let thisID = that.id;
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");//sqaure to bottom-left of clicked square
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");//square to square to top-left of clicked square
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
}
function minesweepLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");//square top-right of clicked square
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");//square bottom-right of clicked square
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
}
function minesweepTopLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");//square bottom-right of clicked square
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
}
function minesweepTop(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");//sqaure to bottom-left of clicked square
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
}
function minesweepTopRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");//sqaure to bottom-left of clicked square
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");//square beneath the clicked square
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
}
function minesweepBottom(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");//square top-right of clicked square
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");//square to square to top-left of clicked square
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
}
function minesweepBottomLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");//square top-right of clicked square
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");//square to right of clicked square
}
function minesweepBottomRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");//square above clicked square
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");//square to square to top-left of clicked square
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");//square to left of clicked square
}
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