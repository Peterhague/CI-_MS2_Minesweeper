let playButton = document.getElementById("play-button");
playButton.addEventListener("click", generateQuestions);
playButton.addEventListener("click", setFocus);
playButton.addEventListener("click", startGame);
let difficultySpelling = document.getElementById("difficulty-spelling");
let submit = document.getElementById("submit");
let repeat = document.getElementById("repeat");
repeat.addEventListener("click", repeatQuestion);
let hint = document.getElementById("hint");
hint.addEventListener("click", giveHint);
let inputTwo = document.getElementById("input-two");
inputTwo.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    submit.click();
  }
});
let output = "";
let currentQuestion = 0;
let addOne = 0;
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
function setFocus() {
  inputTwo.focus();
}
function startGame() {    
  submit.addEventListener("click", spellcheck);// checks the given user input is the same as the dictionary spelling
  submit.addEventListener("click", questionCounter);
  submit.addEventListener("click", clearAnswer);// clears the answer input after each submission
  submit.addEventListener("click", setFocus);
  answerBox.innerHTML = 1;
  setTimeout(function() {            
    answerBox.innerHTML = ""; 
  }, 800);
  addOne = 0;
  setTimeout(function() {            
    speak(randomWords, 0); 
  }, 600);
}
function speak(randomWords, iteration) {
  output = randomWords[iteration];
  responsiveVoice.speak(randomWords[iteration]);
}
function spellcheck () {
  console.log(output.toLowerCase);
  console.log(inputTwo.value);
  if (output.toLowerCase() === inputTwo.value.toLowerCase()) {
    answerBox.innerHTML = "correct!";
    if (answerBox.classList.contains("hinted")) {
      addOne += 0.5;
      answerBox.classList.remove("hinted");
      questionsCorrect(addOne);
    } else {
      addOne += 1;
      questionsCorrect(addOne);
    }
  } else {
    answerBox.innerHTML = "incorrect!";
    answerBox.classList.remove("hinted");
    questionsCorrect(addOne);
  }
}
function clearAnswer() {
  inputTwo.value = "";
  if (currentQuestion < 9) {
    setTimeout(function() {            
      answerBox.innerHTML = ""; 
    }, 2500);
  }
}
function questionCounter() {
  currentQuestion += 1;
  setTimeout(function() {            
    speak(randomWords, currentQuestion); 
  }, 2000);
  console.log(currentQuestion);
  setTimeout(function() {            
    answerBox.innerHTML = currentQuestion+1; 
  }, 1000);
}
function repeatQuestion() {
  speak(randomWords, currentQuestion);
}
function questionsCorrect(addOne) {
  let totalCorrect = 0+addOne;
  finalScore(totalCorrect);
}
function finalScore(totalCorrect) {
  if (currentQuestion === 9) {    
    submit.removeEventListener("click", spellcheck);// checks the given user input is the same as the dictionary spelling
    submit.removeEventListener("click", clearAnswer);
    submit.removeEventListener("click", questionCounter);
    setTimeout(function() {
      answerBox.innerHTML = `You scored ${totalCorrect} out of 10!`;
    }, 1000);
    inputTwo.value = "";    
  }
}
function giveHint() {
  let outputArray = output.split("");
  for (let i = 0; i < outputArray.length; i++) {
    if (i % 2 > 0) {
      outputArray.splice(i, 1, "*");
    }
  }
  answerBox.innerHTML = outputArray.join("");
  answerBox.classList.add("hinted");
}
