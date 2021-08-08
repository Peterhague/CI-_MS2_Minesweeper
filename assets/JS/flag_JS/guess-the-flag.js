let flagContainers = document.getElementsByClassName("flagContainers");
let playFlags = document.getElementById("playFlags");
/*This function is called from user clicking on the play button, and is passed
the next two functions as parameters to be called from within the function.*/
function randomiseFlags(displayFlags, displayInputs) {
    let randomFlags = [];
    while (randomFlags.length < 10) {
        let flag = Math.floor(Math.random()*193);
        if (randomFlags.includes(flag) === false) {
            randomFlags.push(flag);
        }
    }
    displayFlags(randomFlags);
    displayInputs(stylingChanges);
}
function displayFlags(randomFlags) {
    for (let i = 0; i < 10; i++) {
        flagContainers[i].innerHTML = `<img style="width: 96px;" src="https://www.countryflags.io/${flagObjects[randomFlags[i]].code}/flat/64.png"></img>`;
        flagContainers[i].setAttribute("data-flag-name", flagObjects[randomFlags[i]].name);
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
    controlsDiv.classList.remove("margin-top-big");
    controlsDiv.classList.add("margin-top-small");
    let submitButton = document.getElementById("flagsSubmitAnswer");
    submitButton.classList.remove("hide");
    stylingChanges();
}
function stylingChanges() {
    let flagInputs = document.getElementsByClassName("flagInputs");
    for (input of flagInputs) {
        input.classList.add("inlineBlock");
        input.classList.remove("hide");
    }
    for (input of flagInputs) {
        input.value = "";
    }
    let answerDivs = document.getElementsByClassName("answerDiv");
    for (div of answerDivs) {
        div.classList.add("hide");
        div.innerHTML = "";
    }
    let playFlags = document.getElementById("playFlags");
    playFlags.classList.remove("playFlagsInitial");
    let flagsDisplayBox = document.getElementById("flagsDisplayBox");
    flagsDisplayBox.innerHTML = "Click Submit to check your answers";
}
/*function checkAnswers() {
    let flagInputs = document.getElementsByClassName("flagInputs");
    let correctAnswers = 0;
    for (input of flagInputs) {
        if (input.value === input.previousElementSibling.getAttribute("data-flag-name")) {
            input.value = "correct";
            input.classList.remove("block");
            input.classList.add("hide");
            correctAnswers += 1;
        } else {
            input.value = "incorrect";
        }
    }
    displayCorrectAnswers(correctAnswers);
    console.log(correctAnswers);
}*/
function checkAnswers() {
    let flagInputs = document.getElementsByClassName("flagInputs");    
    let answerDivs = document.getElementsByClassName("answerDiv");
    for (div of answerDivs) {
        div.classList.remove("hide");
        div.innerHTML = `<i class="fas fa-times text-red"></i>`;
    }
    let correctAnswers = 0;
    for (input of flagInputs) {
        input.classList.remove("block");
        input.classList.add("hide");
        for (container of flagContainers) {
            if (input.getAttribute("data-input") == container.getAttribute("data-input") && input.value === container.getAttribute("data-flag-name")) {
                input.classList.remove("block");
                input.classList.add("hide");
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


