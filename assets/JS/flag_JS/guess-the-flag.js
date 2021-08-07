let flagContainers = document.getElementsByClassName("flagContainers");
let playFlags = document.getElementById("playFlags");
function randomiseFlags(displayFlags) {
    let randomFlags = [];
    while (randomFlags.length < 10) {
        let flag = Math.floor(Math.random()*193);
        if (randomFlags.includes(flag) === false) {
            randomFlags.push(flag);
        }
    }
    console.log(randomFlags);
    displayFlags(randomFlags);
}
function displayFlags(randomFlags) {
    for (let i = 0; i < 10; i++) {
        flagContainers[i].innerHTML = `<img style="width: 96px;" src="https://www.countryflags.io/${flagObjects[randomFlags[i]].code}/flat/64.png"></img>`;
        flagContainers[i].setAttribute("data-flag-name", flagObjects[randomFlags[i]].name);
    }
    let submitFlagsAnswer = document.getElementById("flagsSubmitAnswer");
    submitFlagsAnswer.addEventListener("click", checkAnswers);
}
function checkAnswers() {
    let flagInputs = document.getElementsByClassName("flagInputs");
    for (input of flagInputs) {
        if (input.value === input.previousElementSibling.getAttribute("data-flag-name")) {
            input.value = "correct";
        } else {
            input.value = "incorrect";
        }
    }
    
}


