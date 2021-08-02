let playButton = document.getElementById("play-button");
playButton.addEventListener("click", clearAnswer);// clears the answer input after each submission
/*playButton.addEventListener("click", generateQuestions);*//// generates an array of 10 random words from the dictionary as the quiz questions
let difficultySpelling = document.getElementById("difficulty-spelling");
let submit = document.getElementById("submit");
submit.addEventListener("click", spellcheck);// checks the given user input is the same as the dictionary spelling
submit.addEventListener("click", questionCounter);
let inputTwo = document.getElementById("input-two");
let output = "";
let currentQuestion = 0;
let randomWords = generateQuestions();
let answerBox = document.getElementById("answer-box");
function generateQuestions() {
  x = [];
  while (x.length < 10) {
    if (difficultySpelling.value == "Easy") {
      let word = dictionary[0][Math.floor(Math.random()*200)];
      if (x.includes(word) === false) {
        x.push(word);
      }
    } else if (difficultySpelling.value == "Medium") {
      let word = dictionary[1][Math.floor(Math.random()*200)];
      if (x.includes(word) === false) {
        x.push(word);
      }
    } else if (difficultySpelling.value == "Hard") {
      let word = dictionary[2][Math.floor(Math.random()*200)];
      if (x.includes(word) === false) {
        x.push(word);
      }
    } else if (difficultySpelling.value == "Very Hard") {
      let word = dictionary[3][Math.floor(Math.random()*200)];
      if (x.includes(word) === false) {
        x.push(word);
      }
    }
  }
  speak(x, 0);
  return x;
}
function speak(randomWords, iteration) {
  responsiveVoice.speak(randomWords[iteration]);
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
function questionCounter() {
  currentQuestion += 1;
  console.log(currentQuestion);
  speak(randomWords, currentQuestion);
  console.log(randomWords[1]);
}

console.log(randomWords);