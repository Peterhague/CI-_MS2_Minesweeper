let playButton = document.getElementById("play-button");
playButton.addEventListener("click", clearAnswer);
playButton.addEventListener("click", generateQuestions);
let difficultySpelling = document.getElementById("difficulty-spelling");
let submit = document.getElementById("submit");
submit.addEventListener("click", questionCounter);
submit.addEventListener("click", spellcheck);
let inputTwo = document.getElementById("input-two");
let output = "";
let answerBox = document.getElementById("answer-box");
function generateQuestions() {
  let randomWordIndex = Math.floor(Math.random()*200);
  let randomWords = [];
  for (i = 0; i < 10; i++) {
    if (difficultySpelling.value == "Easy") {
      let word = dictionary[0][randomWordIndex];
      if (randomWords.includes(word) === false) {
        randomWords.push(word);
      }
    } else if (difficultySpelling.value == "Medium") {
      let word = dictionary[1][randomWordIndex];
      if (randomWords.includes(word) === false) {
        randomWords.push(word);
      }
    } else if (difficultySpelling.value == "Hard") {
      let word = dictionary[2][randomWordIndex];
      if (randomWords.includes(word) === false) {
        randomWords.push(word);
      }
    } else if (difficultySpelling.value == "Very Hard") {
      let word = dictionary[3][randomWordIndex];
      if (randomWords.includes(word) === false) {
        randomWords.push(word);
      }
    }
  }
  speak(randomWords);
}
function speak(randomWords) {
  console.log(randomWords);
  responsiveVoice.speak(randomWords[0]);
}

function spellcheck () {
  if (output === inputTwo.value) {
    answerBox.innerHTML = "correct!";
  } else {
    answerBox.innerHTML = "incorrect!"
  }
}
function clearAnswer() {
  inputTwo.value = "";
  answerBox.innerHTML = "";
}