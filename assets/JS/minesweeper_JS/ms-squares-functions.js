function addFlags() {
    let squares = document.getElementsByClassName("squares");
    $(squares).mousedown(function(event) {
        // code for placing and removing "flags" on squares as mine-markers, via a right-click (hence "case 3")
        if (!this.classList.contains("selected")) {
            // ie if the square hasn't already been left-clicked on to reveal no mine
            switch (event.which) {
            case 3:
                if (this.classList.contains("even-squares")) {
                    $(this).removeClass("even-squares"); // removes the styling
                    $(this).removeClass("hovered-squares"); // removes hover pseudo class
                    $(this).addClass("evenReserved"); 
                    /* this purely nominal class reserves that the square DID have class of "even-squares"
                    within the element's attributes, so that fact can be accessed later on if the flag is removed*/
                    $(this).addClass("flagged");
                    $(this).attr("data-id", this.innerHTML);
                    /* this custom attribute reserves the square's inner html (ie what number of mines surrounds it)
                    so that it can be accessed later on if the flag is removed (the inner html will change to the
                    flag icon)*/
                    $(this).html(`<i class="fas fa-flag"></i>`); // square displays the flag icon
                    scoreContainer.innerHTML = scoreContainer.innerHTML - 1; // reduces the display of number of flags in hand by 1
                } else if (this.classList.contains("odd-squares")) {
                    // same process as above but for "odd-squares"
                    $(this).removeClass("odd-squares");
                    $(this).removeClass("hovered-squares");
                    $(this).addClass("oddReserved");
                    $(this).addClass("flagged");
                    $(this).attr("data-id", this.innerHTML);
                    $(this).html(`<i class="fas fa-flag"></i>`);
                    scoreContainer.innerHTML = scoreContainer.innerHTML - 1;
                } else if (this.classList.contains("flagged") && this.classList.contains("evenReserved")) {
                    // reverses the process when an even square already has a flag
                    $(this).removeClass("flagged");
                    $(this).removeClass("evenReserved");
                    $(this).addClass("even-squares");
                    $(this).addClass("hovered-squares");
                    $(this).html($(this).attr("data-id"));
                    scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
                } else if (this.classList.contains("flagged") && this.classList.contains("oddReserved")) {
                    // reverses the process when an odd square already has a flag
                    $(this).removeClass("flagged");
                    $(this).removeClass("oddReserved");
                    $(this).addClass("odd-squares");
                    $(this).addClass("hovered-squares");
                    $(this).html($(this).attr("data-id"));
                    scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
                }
            }
        }
    });
}
function minesweep() {
    /* This code runs when the player left clicks on any square in the grid.
    Its main function is to check if any of the surrounding squares of the clicked
    square have an innerHTML value of zero. If the value of the clicked square is zero,
    this function will then automatically "click" on any of its surrounding squares that
    ALSO have a value of zero. */
    this.removeEventListener("click", minesweep);// so a square can only be clicked once
    this.classList.remove("hovered-squares");// removes the highlight effect from clicked squares
    this.classList.remove("even-squares", "odd-squares");
    this.classList.add("selected");// adds identifier to clicked squares
    if (parseInt(this.innerHTML) === 0) { // changes the styling of clicked squares
        this.classList.add("text-grey");
    } else {
        /*this.classList.add("text-blue");*/
        colorByNumber(this);
    }
    let squares = document.getElementsByClassName("squares");
    for (square of squares) {
        /* removes the class identifier from the squares selected by the below code as
        surrounding the clicked square. This prevents the automated clicking code from
        clicking on squares previously identified as surrounding OTHER squares but which weren't
        selected for automatic clicking because the initially clicked square didn't have a value
        of zero*/
        square.classList.remove("clicked-square-radius");
    }
    if (this.classList.contains("right-edge")) {
        minesweepRight(squares, this);
    } else if (this.classList.contains("left-edge")) {
        minesweepLeft(squares, this);
    } else if (this.classList.contains("top-left")) {
        minesweepTopLeft(squares, this);        
    } else if (this.classList.contains("top-edge")) {
        minesweepTop(squares, this);        
    } else if (this.classList.contains("top-right")) {
        minesweepTopRight(squares, this);        
    } else if (this.classList.contains("bottom-edge")) {
        minesweepBottom(squares, this);        
    } else if (this.classList.contains("bottom-left")) {
        minesweepBottomRight(squares, this);        
    } else if (this.classList.contains("bottom-right")) {
        minesweepBottomRight(squares, this);        
    } else if (this.classList.contains("middle")) {
        minesweepMiddle(squares, this);
    }
    automatedClick(this);
}

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