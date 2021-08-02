let playButton = document.getElementById("play-button");
playButton.addEventListener("click", generateQuestions);
playButton.addEventListener("click", startGame);
let difficultySpelling = document.getElementById("difficulty-spelling");
let submit = document.getElementById("submit");
submit.addEventListener("click", spellcheck);// checks the given user input is the same as the dictionary spelling
submit.addEventListener("click", questionCounter);
submit.addEventListener("click", clearAnswer);// clears the answer input after each submission
let repeat = document.getElementById("repeat");
repeat.addEventListener("click", repeatQuestion);
let inputTwo = document.getElementById("input-two");
let output = "";
let currentQuestion = 0;
let randomWords = [];
let answerBox = document.getElementById("answer-box");
function generateQuestions() {
  randomWords = [];
  currentQuestion = 0;
  while (randomWords.length < 10) {
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
}
function startGame() {
  speak(randomWords, 0);
}
function speak(randomWords, iteration) {
  output = randomWords[iteration];
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
  setTimeout(function() {            
    answerBox.innerHTML = ""; 
  }, 800);
}
function questionCounter() {
  currentQuestion += 1;
  setTimeout(function() {            
    speak(randomWords, currentQuestion); 
  }, 1000);  
}
function repeatQuestion() {
  speak(randomWords, currentQuestion);
}

