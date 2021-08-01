let playButton = document.getElementById("play-button");
playButton.addEventListener("click", clearAnswer);
playButton.addEventListener("click", generateQuestions);
let difficultySpelling = document.getElementById("difficulty-spelling");
let submit = document.getElementById("submit");
submit.addEventListener("click", spellcheck);
submit.addEventListener("click", questionCounter);
submit.onclick = function() {questionCounter(randomWords)};
let inputTwo = document.getElementById("input-two");
let output = "";
let currentQuestion;
let randomWords = [];
let answerBox = document.getElementById("answer-box");
function generateQuestions() {
  for (let i = 0; i < 10; i++) {
    if (difficultySpelling.value == "Easy") {
      let word = dictionary[0][Math.floor(Math.random()*200)];
      if (randomWords.includes(word) === false) {
        randomWords.push(word);
      }
    } else if (difficultySpelling.value == "Medium") {
      let word = dictionary[1][Math.floor(Math.random()*200)];
      if (randomWords.includes(word) === false) {
        randomWords.push(word);
      }
    } else if (difficultySpelling.value == "Hard") {
      let word = dictionary[2][Math.floor(Math.random()*200)];
      if (randomWords.includes(word) === false) {
        randomWords.push(word);
      }
    } else if (difficultySpelling.value == "Very Hard") {
      let word = dictionary[3][Math.floor(Math.random()*200)];
      if (randomWords.includes(word) === false) {
        randomWords.push(word);
      }
    }
  }
  speak(randomWords, 0);
  return randomWords;
}
function speak(randomWords, iteration) {
  responsiveVoice.speak(randomWords[iteration]);
  console.log(randomWords);
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
function questionCounter(randomWords) {
  currentQuestion += 1;
  speak(randomWords, currentQuestion);
}