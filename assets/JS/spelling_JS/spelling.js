let button = document.getElementById("button");
button.addEventListener("click", speak);

let submit = document.getElementById("submit");
submit.addEventListener("click", spellcheck);

let inputTwo = document.getElementById("input-two");

let output = ""

function speak() {
  let randomWordIndex = Math.floor(Math.random()*200)
  console.log(randomWordIndex);
  output = dictionary[0][randomWordIndex];
  responsiveVoice.speak(output);
}

function spellcheck () {
  if (output === inputTwo.value) {
    inputTwo.value = "correct!";
  } else {
    inputTwo.value = "incorrect!"
  }
}




