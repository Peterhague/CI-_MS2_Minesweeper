let flagContainers = document.getElementsByClassName("flagContainers");
let playFlags = document.getElementById("playFlags");
/*This function is called on user clicking the play button, and creates a random
list of 10 unique numbers, between 0 and 192. It then calls the next 3 functions in
the play game process.*/
function randomiseFlags(displayFlags, displayInputs) {
    let randomFlags = [];
    while (randomFlags.length < 10) {
        let flag = Math.floor(Math.random()*193);
        if (randomFlags.includes(flag) === false) {
            randomFlags.push(flag);
        }
    }
    hideResetProcess();
    displayFlags(randomFlags);
    displayInputs(stylingChanges);
}
/*Function hides the process of resetting the flags diplayed on trigger of a new game: there's
a very brief chnage of div dimensions etc with different sized content applied, and this created
and ugly 'bounce' effect. This code just hides that by displaying a completely blank div for 0.3s while
the reload takes place*/
function hideResetProcess() {
    let mainContainer = document.getElementById("mainContainer");
    mainContainer.classList.add("hide");
    setTimeout(function() {                
        mainContainer.classList.remove("hide");
        setFocus();
    }, 300);
}
/*function runs on click of new game and loops throught the flag container divs which display the flags in the game, and 
assigns each one a flag image from the library at countryflags.io. It does so by using each of the random numbers generated 
in the randomiseFlags function as an index of the flagObjects array stored in flag-library.js file. Then does the following:
1. accesses the given country code via that object's "code" key. This code is then inserted into the img src attribute
at the appropriate location to access the flag image stored with that code.
2. each container is given a custom attribute of data-flag-name, being the actual name of country to which the flag 
belongs, to check against the user's answer.
3. each container is given an optional alt-names attribute, which some of the objects in the library have where countries 
have multiple commonly used names, eg USA and United States.
*/
function displayFlags(randomFlags) {
    for (let i = 0; i < 10; i++) {
        flagContainers[i].innerHTML = `<img class="flagImages" style="width: 96px;" src="https://www.countryflags.io/${flagObjects[randomFlags[i]].code}/flat/64.png"></img>`;
        flagContainers[i].setAttribute("data-flag-name", flagObjects[randomFlags[i]].name);
        flagContainers[i].setAttribute("data-flag-alt-names", flagObjects[randomFlags[i]].altNames);
    }
    let submitFlagsAnswer = document.getElementById("flagsSubmitAnswer");
    submitFlagsAnswer.addEventListener("click", checkAnswers);
}
/*function runs on click of new game and displays some of the elements defined in the html by removing
their display: none CSS attributes.
*/
function displayInputs(stylingChanges) {
    let flagsRowOne = document.getElementById("flagsRowOne");
    flagsRowOne.classList.remove("hide");
    let flagsRowTwo = document.getElementById("flagsRowTwo");
    flagsRowTwo.classList.remove("hide");
    let controlsDiv = document.getElementById("controlsDiv");
    let inputContainers = document.getElementsByClassName("inputContainer");
    for (container of inputContainers) {
        container.classList.remove("hide");
    }
    controlsDiv.classList.remove("margin-top-big");
    controlsDiv.classList.add("margin-top-vsmall");
    let submitButton = document.getElementById("flagsSubmitAnswer");
    submitButton.classList.remove("hide");
    stylingChanges();
}
/*function runs on click of new game and changes the styling of some of the elements displayed on page load,
and then sets the focus on the first flag answer input via the setFocus function.
*/
function stylingChanges() {
    let mainContainer = document.getElementById("mainContainer");
    mainContainer.classList.add("margin-top-small");
    let answerDivs = document.getElementsByClassName("answerDiv");
    let flagInputs = document.getElementsByClassName("flagInputs");
    let playFlags = document.getElementById("playFlags");
    playFlags.classList.remove("playFlagsInitial");
    playFlags.classList.add("playFlagsSubsequent");
    playFlags.innerHTML = "Play Again";
    let flagsDisplayBox = document.getElementById("flagsDisplayBox");
    flagsDisplayBox.innerHTML = `Click Submit to check your answers<br><i class="fas fa-smile invisible-text"></i>`;
    let submitFlagsAnswer = document.getElementById("flagsSubmitAnswer");
    submitFlagsAnswer.innerHTML = "Submit";
    stylingChangesLoops(answerDivs, flagInputs);
    setFocus();
}
/*this code just runs more of the styling changes on trigger of a new game, but where it's necessary to iterate over multiple
elements. Effectively it hides the divs that display the answers and shows the divs containing the input divs.*/
function stylingChangesLoops(answerDivs, flagInputs) {
    for (div of answerDivs) {
        div.classList.add("hide");
        div.innerHTML = "";
    }
    for (input of flagInputs) {
        input.classList.add("inlineBlock");
        input.classList.remove("hide");
        input.value = "";
    }
}
/*sets focus on first answer input*/
function setFocus() {
    let flagOneInput = document.getElementById("flagOneInput");
    flagOneInput.focus();
}
/*sets focus on the play again button after the reveal answers button is clicked. This just helps UX for those people
playing a PC/keyboard, so they don't have to use the mouse to select replay, or indeed the back tab key.*/
function setFocusPlay() {
    playFlags.focus();
}
/*event handler for click of submit button. Removes the display:none CSS from the answer divs (ie the containers for 
showing a tick or cross). Assigns each div an "incorrect" state by default (ie red text and the cross icon).
Calls a further 2 functions.*/
function checkAnswers() {
    let flagInputs = document.getElementsByClassName("flagInputs");    
    let answerDivs = document.getElementsByClassName("answerDiv");
    for (div of answerDivs) {
        div.classList.remove("hide");
        div.innerHTML = `<i class="fas fa-times text-red"></i>`;
    }
    let correctAnswers = 0;
    iterateCorrectAnswers(correctAnswers, flagInputs, answerDivs);
    changeButton();
}
/* for each of the user's answers (flagInputs), code removes the user input fields.
It then checks the answers are correct via a complicated if statement. This says that if the input elements' data-input
attribute is the same as the flag containers' data-input attribute (ie 0-9, and the same if the input is literally 
below the flag: effectively, are the input and flag associated?) AND if the answer is the same as the flag container's
data-flag-name attribute, OR if it's the same as the flag container's data-flag-alt-names attribute, THEN the answer is
correct.
If this condition is met, then the associated answerDivs are assigned the tick icon and green text, and 1 is added
to the value of the correctAnswers variable.*/ 
function iterateCorrectAnswers(correctAnswers, flagInputs, answerDivs) {
    for (input of flagInputs) {
        input.classList.remove("inlineBlock");
        input.classList.add("hide");
        for (container of flagContainers) {
            if (input.getAttribute("data-input") == container.getAttribute("data-input") && (input.value.toLowerCase()
             === container.getAttribute("data-flag-name").toLowerCase() || input.value.toLowerCase() === 
             container.getAttribute("data-flag-alt-names").toLowerCase())) {
                for (div of answerDivs) {
                    if (div.getAttribute("data-input") === input.getAttribute("data-input")) {
                        div.innerHTML = `<i class="fas fa-check text-green"></i>`;
                    }
                }
                correctAnswers += 1;
            }
        }
    }
    displayCorrectAnswers(correctAnswers);
}
/*simple function to determine which score message to display based on how many correct answers (ie value of correctAnswers
variable)*/
function displayCorrectAnswers(correctAnswers) {
    if (correctAnswers < 4) {        
        flagsDisplayBox.innerHTML = `Unlucky! You scored ${correctAnswers} out of 10<br><i class="far fa-frown scoreSmileys"></i>`;
    } else if (correctAnswers > 3 && correctAnswers < 7) {
        flagsDisplayBox.innerHTML = `Not bad, you scored ${correctAnswers} out of 10<br><i class="far fa-meh scoreSmileys"></i>`;
    } else if (correctAnswers > 6 && correctAnswers < 10) {
        flagsDisplayBox.innerHTML = `Well done! You scored ${correctAnswers} out of 10<br><i class="far fa-smile scoreSmileys"></i>`;
    } else if (correctAnswers === 10) {
        flagsDisplayBox.innerHTML = `Perfect! You scored ${correctAnswers} out of 10!!<br><i class="far fa-laugh-squint scoreSmileys"></i>`;
    }
}
/*code changes the wording of the submit answers button once pressed, to 'reveal', and changes the event listener
to the revealAnswers event handler*/
function changeButton() {
    let submitFlagsAnswer = document.getElementById("flagsSubmitAnswer");
    submitFlagsAnswer.innerHTML = "Reveal";
    submitFlagsAnswer.removeEventListener("click", checkAnswers);
    submitFlagsAnswer.addEventListener("click", revealAnswers);
}
/* function displays the correct answer by getting the answerDiv's parent's previous sibling element (ie the flag) and accessing
its stored country name in the data-flag-name attribute and displaying it to the user as the answer*/
function revealAnswers() {
    let submitFlagsAnswer = document.getElementById("flagsSubmitAnswer")
    submitFlagsAnswer.removeEventListener("click", revealAnswers);
    setFocusPlay();
    let answerDivs = document.getElementsByClassName("answerDiv");
    for (div of answerDivs) {
        if (div.innerHTML == `<i class="fas fa-times text-red"></i>`) {
            div.innerHTML = div.parentNode.previousElementSibling.getAttribute("data-flag-name");
        }
    }
}

