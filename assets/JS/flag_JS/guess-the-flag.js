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
/*This code loops throught the flag container divs which display the flags in the game, and assigns each one a flag
image from the library at countryflags.io. It does so by using each of the random numbers generated in the randomiseFlags
function as an index of the flagObjects array stored in flag-library.js file. 
It firstly accesses the given country code via that object's "code" key. This code is then inserted into the img src attribute
at the appropriate location to access the flag image stored with that code.
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
function setFocus() {
    let flagOneInput = document.getElementById("flagOneInput");
    flagOneInput.focus();
}
function setFocusPlay() {
    playFlags.focus();
}
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
function iterateCorrectAnswers(correctAnswers, flagInputs, answerDivs) {
    for (input of flagInputs) {
        input.classList.remove("inlineBlock");
        input.classList.add("hide");
        for (container of flagContainers) {
            if (input.getAttribute("data-input") == container.getAttribute("data-input") && (input.value.toLowerCase() === container.getAttribute("data-flag-name").toLowerCase() || input.value.toLowerCase() === container.getAttribute("data-flag-alt-names").toLowerCase())) {
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
function changeButton() {
    let submitFlagsAnswer = document.getElementById("flagsSubmitAnswer");
    submitFlagsAnswer.innerHTML = "Reveal";/*
    let flagsDisplayBox = document.getElementById("flagsDisplayBox");
    flagsDisplayBox.focus();*/
    submitFlagsAnswer.removeEventListener("click", checkAnswers);
    submitFlagsAnswer.addEventListener("click", revealAnswers);
}
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

