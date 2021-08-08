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
    let submitButton = document.getElementById("flagsSubmitAnswer");
    submitButton.classList.remove("hide");
    let flagInputs = document.getElementsByClassName("flagInputs");
    for (input of flagInputs) {
        input.classList.add("block");
        input.classList.remove("hide");
    }
    stylingChanges();
}
function stylingChanges() {
    let flagInputs = document.getElementsByClassName("flagInputs");
    console.log("hello");
    for (input of flagInputs) {
        input.value = "";
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
    let correctAnswers = 0;
    for (input of flagInputs) {
        input.classList.remove("block");
        input.classList.add("hide");
        input.previousElementSibling.innerHTML = `<i class="fas fa-cross"></i>`;
        for (container of flagContainers) {
            if (input.getAttribute("data-input") == container.getAttribute("data-input") && input.value === container.getAttribute("data-flag-name")) {
                input.classList.remove("block");
                input.classList.add("hide");
                input.previousElementSibling.innerHTML = `<i class="fas fa-check"></i>`;
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


