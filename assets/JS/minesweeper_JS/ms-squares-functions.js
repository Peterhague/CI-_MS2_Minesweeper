/* event handler for a right click on each grid square. Determines whether the squares has already been left clicked on and hence
'cleared' and if not, then distinguishes between flags that already have a flag (following a previous right click) and those
that are 'even' squares and 'odd' squares. The former is to allow a right click to toggle the placement of the flag and the latter
allows the code to 'remember' the square's previous state, so it can return to that if the flag is then toggled off.
Once these conditions are defined the appropriate function is callled and passed the necessary arguments.*/
function addFlags() {
    let squares = document.getElementsByClassName("squares");
    $(squares).mousedown(function(event) {
        // code for placing and removing "flags" on squares as mine-markers, via a right-click (hence "case 3")
        if (!this.classList.contains("selected")) {
            // ie if the square hasn't already been left-clicked on to reveal no mine
            switch (event.which) {
            case 3:
                if (this.classList.contains("even-squares")) {
                    squareFlagged(this, "even");                    
                } else if (this.classList.contains("odd-squares")) {
                    // same process as above but for "odd-squares"
                    squareFlagged(this, "odd");
                } else if (this.classList.contains("flagged") && this.classList.contains("evenReserved")) {
                    // reverses the process when an even square already has a flag
                    squareUnflagged(this, "even");
                } else if (this.classList.contains("flagged") && this.classList.contains("oddReserved")) {
                    // reverses the process when an odd square already has a flag
                    squareUnflagged(this, "odd");
                }
            }
        }
    });
}
/* called from addFlags function to place a flag in the square clicked. The function is passed 'this' as the first argument
(ie the square clicked on) and either even or od depending on the square clicked. It then removes the odd/even class that defines
its styling and replaces it with a nominal class of even/oddReserved, so that the distinction between odd and even can be accessed
by JS later on if the flag needs to be replaced and the original styling reinstated.
It also replaces the square's inner html (ie the number of mines in its surrounding squares) with a flag icon and stores the 
information about the # of mines in a cutom attribute 'data-id', again so this can potentially be retrieved later.*/
function squareFlagged(that, evenOrOdd) {
    $(that).removeClass(`${evenOrOdd}-squares`);
    $(that).removeClass("hovered-squares");
    $(that).addClass(`${evenOrOdd}Reserved`);
    $(that).addClass("flagged");
    $(that).attr("data-id", that.innerHTML);
    $(that).html(`<i class="fas fa-flag"></i>`); // square displays the flag icon
    scoreContainer.innerHTML = scoreContainer.innerHTML - 1; // reduces the display of number of flags in hand by 1
}
//literally reverses the process of the squareFlagged function to remove the flags on a second right click on a square
function squareUnflagged(that, evenOrOdd) {
    $(that).removeClass("flagged");
    $(that).removeClass(`${evenOrOdd}Reserved`);
    $(that).addClass(`${evenOrOdd}-squares`);
    $(that).addClass("hovered-squares");
    $(that).html($(that).attr("data-id"));
    $(that).removeClass("selected");
    scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
}
let downPress;
let release;
//event handler for a touchstart event on a square. Stores the time at the start of a press in a variable
function longPressDown() {
    downPress = "";
    downPress = Date.now();
}
/*event handler for a touchend event on a square. Stores the time at the end of a press in variable 'release', and compares
it to the time at the start. If it's more than 300ms then this is essentially defined as a long press and the addFlagsLong fn
is called. The square's normal event listeners are temporarily removed to stop them interfering with the long press process.*/
function longPressUp() {
    release = "";
    release = Date.now();
    if ((release - downPress) > 300) {        
        this.removeEventListener("click", minesweep); 
        this.removeEventListener("click", gameOverOne);
        this.removeEventListener("click", gameOverTwo);
        addFlagsLong(this);
    }
}
//essentially the same code as the addFlags function but reinstates the event listeners 200ms after the touchend event
function addFlagsLong(that) {
    if (!that.classList.contains("selected")) {
        // ie if the square hasn't already been left-clicked on to reveal no mine
        if (that.classList.contains("even-squares")) {
            squareFlagged(that, "even");
        } else if (that.classList.contains("odd-squares")) {
            squareFlagged(that, "odd");
        } else if (that.classList.contains("flagged") && that.classList.contains("evenReserved")) {
            squareUnflagged(that, "even");
        } else if (that.classList.contains("flagged") && that.classList.contains("oddReserved")) {
            squareUnflagged(that, "odd");
        } 
    } 
    setTimeout(function() {            
        that.addEventListener("click", minesweep); 
        that.addEventListener("click", gameOverOne);
        that.addEventListener("click", gameOverTwo);
    }, 200);
}
/* This code runs when the player left clicks on any square in the grid. It checks whether a square has been 'flagged' and
if it's already been clicked, and if not starts running through the processes for a normal click event. Firstly the squares
are changed in colour to signify that they've been cleared, and assigned a text colour based on the number of mines around
them, and then the signifying class 'clicked-square-radius' is removed from all other squares, to facilitate the autoamted clicking
code that will be triggered in certain cases. The function minesweepRoutineDetector is then called.*/
function minesweep() {
    if (!this.classList.contains("flagged") && !this.classList.contains("automaticallyClicked")) {
        this.classList.remove("hovered-squares");// removes the highlight effect from clicked squares
        this.classList.remove("even-squares", "odd-squares");
        this.classList.add("selected");// adds identifier to clicked squares
        if (parseInt(this.innerHTML) === 0) { // changes the styling of clicked squares
            this.classList.add("text-grey");
        } else {
            colorByNumber(this);
        }
        let squares = document.getElementsByClassName("squares");
        for (square of squares) {
            square.classList.remove("clicked-square-radius");
        }
        minesweepRoutineDetector(this,squares);
    }      
}
/*determines where the square is in the grid and therefore which squares' ids relative to its own will be identified as belonging
to squares that 'surround' it in terms of what the user actually sees on the grid*/
function minesweepRoutineDetector(that, squares) {
    if (that.classList.contains("right-edge")) {
        minesweepRight(squares, that);
    } else if (that.classList.contains("left-edge")) {
        minesweepLeft(squares, that);
    } else if (that.classList.contains("top-left")) {
        minesweepTopLeft(squares, that);        
    } else if (that.classList.contains("top-edge")) {
        minesweepTop(squares, that);        
    } else if (that.classList.contains("top-right")) {
        minesweepTopRight(squares, that);        
    } else if (that.classList.contains("bottom-edge")) {
        minesweepBottom(squares, that);        
    } else if (that.classList.contains("bottom-left")) {
        minesweepBottomLeft(squares, that);        
    } else if (that.classList.contains("bottom-right")) {
        minesweepBottomRight(squares, that);        
    } else if (that.classList.contains("middle")) {
        minesweepMiddle(squares, that);
    }
    if (parseInt(that.innerHTML) === 0) {
        automatedClick(that);
    }
}
//called from the minesweep function, and assigns each square a text color depending on its inner html
function colorByNumber(that) {
    if (that.innerHTML == 1) {
        that.classList.add("text-blue");
    } else if (that.innerHTML == 2) {
        that.classList.add("text-green");
    } else if (that.innerHTML == 3) {
        that.classList.add("text-red");
    } else if (that.innerHTML == 4) {
        that.classList.add("text-purple");
    } else if (that.innerHTML == 5) {
        that.classList.add("text-orange");
    } else if (that.innerHTML == 6) {
        that.classList.add("text-pink");
    } else if (that.innerHTML == 7) {
        that.classList.add("text-gold");
    } else if (that.innerHTML == 8) {
        that.classList.add("text-black");
    }
}
