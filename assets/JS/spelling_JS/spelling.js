let playButton = document.getElementById("play-button");
playButton.addEventListener("click", generateQuestions);
playButton.addEventListener("click", setFocus);
playButton.addEventListener("click", startGame);
let difficultySpelling = document.getElementById("difficulty-spelling");
difficultySpelling.addEventListener("change", dictionarySet);
let dictionaryNumber = 0;
//runs on change of difficulty, and determines which dictionary of words to choose from based on the difficulty selected
function dictionarySet() {
  if (difficultySpelling.value == "Easy") {
    dictionaryNumber = 0;
  } else if (difficultySpelling.value == "Medium") {
    dictionaryNumber = 1;
  } else if (difficultySpelling.value == "Hard") {
    dictionaryNumber = 2;
  } else if (difficultySpelling.value == "Very Hard") {
    dictionaryNumber = 3;
  }
}
let submit = document.getElementById("submit");
let repeat = document.getElementById("repeat");
repeat.addEventListener("click", repeatQuestion);
repeat.addEventListener("click", setFocus);
let hint = document.getElementById("hint");
hint.addEventListener("click", giveHint);
hint.addEventListener("click", setFocus);
let inputTwo = document.getElementById("input-two");
//code allows submission of the answer on press of return key as well as click of submit button
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
//generates 10 random words from the selected dictionary to be used as questions for the game, stored in the randomWords variable
function generateQuestions() {
  randomWords = [];
  currentQuestion = 0;
  while (randomWords.length < 10) {
    let word = dictionary[dictionaryNumber][Math.floor(Math.random()*200)];
    if (randomWords.includes(word) === false) {
      randomWords.push(word);
    }
  }
}
// sets the focus on the user input field
function setFocus() {
  inputTwo.focus();
}
/* adds events listeners to submit button and sets the question number to be displayed in UI. Also calls the responsiveVoice
API and tells it to speak the first of the random words*/
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
// calls the RV API and asks it to speak the next iteraton of the randomWords array
function speak(randomWords, iteration) {
  output = randomWords[iteration];
  responsiveVoice.speak(randomWords[iteration]);
}
/* checks the user's input against the spelling of the word in the dictionary (current word stored in the output variable).
If the spelling is correct a 'correct' message is displayed. The code then checks whether the player has asked for a hint on 
that question, and if so, adds half a point to their score. If not, it adds a full point.
*/
function spellcheck () {
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
//resets the user input and the displayed answer to blank, with a 2.5s delay for the answer
function clearAnswer() {
  inputTwo.value = "";
  if (currentQuestion < 10) {
    setTimeout(function() {            
      answerBox.innerHTML = ""; 
    }, 2500);
  }
}
/* adds one to the currentQuestion variable as each new question is asked. Calls the function to ask the following question
using the updated currentQuestion variable and displays that question number to the user*/
function questionCounter() {
  currentQuestion += 1;
  setTimeout(function() {            
    speak(randomWords, currentQuestion); 
  }, 2000);
  setTimeout(function() {            
    answerBox.innerHTML = currentQuestion+1; 
  }, 1000);
}
// event handler for the repeat button, simply repeats the current question
function repeatQuestion() {
  speak(randomWords, currentQuestion);
}
/* called by the spellcheck function, defines a totalCorrect variable and calls the finalScore function and passes that as its
argument*/
function questionsCorrect(addOne) {
  let totalCorrect = 0+addOne;
  finalScore(totalCorrect);
}
/* checks whether the current question is the last one of the 10 in each game, and if so presents the user with their final
score and removes the then-redundant event listeners*/
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
/*event handler for the hint button. Relaces every other letter of the current word with an * and displays it to the user as
a hint to the correct spelling*/
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
