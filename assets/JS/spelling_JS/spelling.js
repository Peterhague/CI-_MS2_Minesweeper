let playButton = document.getElementById("play-button");
playButton.addEventListener("click", generateQuestions);
playButton.addEventListener("click", startGame);
let difficultySpelling = document.getElementById("difficulty-spelling");
let submit = document.getElementById("submit");

let repeat = document.getElementById("repeat");
repeat.addEventListener("click", repeatQuestion);
let hint = document.getElementById("hint");
hint.addEventListener("click", giveHint);
let inputTwo = document.getElementById("input-two");
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
function startGame() {
  submit.addEventListener("click", spellcheck);// checks the given user input is the same as the dictionary spelling
  submit.addEventListener("click", questionCounter);
  submit.addEventListener("click", clearAnswer);// clears the answer input after each submission
  addOne = 0;
  speak(randomWords, 0);
}
function speak(randomWords, iteration) {
  output = randomWords[iteration];
  responsiveVoice.speak(randomWords[iteration]);
}
function spellcheck () {
  if (output === inputTwo.value) {
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
    }, 800);
  }
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
function questionsCorrect(addOne) {
  let totalCorrect = 0+addOne;
  console.log(totalCorrect);
  finalScore(totalCorrect);
}
function finalScore(totalCorrect) {
  if (currentQuestion === 9) {    
    submit.removeEventListener("click", spellcheck);// checks the given user input is the same as the dictionary spelling
    submit.removeEventListener("click", questionCounter);
    submit.removeEventListener("click", clearAnswer);
    setTimeout(function() {
      answerBox.innerHTML = `You scored ${totalCorrect} out of 10!`;
    }, 1000);    
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
