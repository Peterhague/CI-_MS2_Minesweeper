let playButton = document.getElementById("play-button");
playButton.addEventListener("click", speak);
let difficultySpelling = document.getElementById("difficulty-spelling");
let submit = document.getElementById("submit");
submit.addEventListener("click", spellcheck);
let inputTwo = document.getElementById("input-two");
let output = ""

function speak() {
  let randomWordIndex = Math.floor(Math.random()*200);
  if (difficultySpelling.value == "Easy") {
    output = dictionary[0][randomWordIndex];
  } else if (difficultySpelling.value == "Medium") {
    output = dictionary[1][randomWordIndex];
  } else if (difficultySpelling.value == "Hard") {
    output = dictionary[2][randomWordIndex];
  } else {
    output = dictionary[3][randomWordIndex];  
  }
  responsiveVoice.speak(output);
  console.log(difficultySpelling.value);
}

function spellcheck () {
  if (output === inputTwo.value) {
    inputTwo.value = "correct!";
  } else {
    inputTwo.value = "incorrect!"
  }
}