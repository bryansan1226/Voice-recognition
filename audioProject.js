var canvas = undefined;
var context = undefined;
function start() {
  canvas = document.getElementById("myCanvas");
  context = canvas.getContext("2d");
  banana = new Image();
  apple = new Image();
  orange = new Image();
  pineapple = new Image();
  strawberry = new Image();
  banana.src = "./images/banana.png";
  apple.src = "./images/apple.png";
  orange.src = "./images/orange.png";
  pineapple.src = "./images/pineapple.png";
  strawberry.src = "./images/strawberry.png";
  main();
}
document.addEventListener("DOMContentLoaded", start);
function main() {
  resetCanvas();
  document.getElementById("speak").addEventListener("click", (event) => {
    listen();
  });
}

function listen() {
  document.getElementById("speak").textContent = "Stop";
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  var result = null;
  recognition.onresult = function (e) {
    console.log(e.results[0][0].transcript);
    result = e.results[0][0].transcript.toLowerCase();
    handleResult(result);
    document.getElementById("speak").textContent = "Listen";
  };
  recognition.onend = function (e) {
    if (result == null) {
      context.fillStyle = "black";
      context.font = "30px Arial";
      context.fillText("Item not listed or speech is unclear", 300, 175);
      window.setTimeout(resetCanvas, 3000);
      document.getElementById("speak").textContent = "Listen";
      console.log(e);
    }
  };
  recognition.start();
}
function handleResult(result) {
  if (result == "banana") {
    context.drawImage(banana, 300, 125);
    window.setTimeout(resetCanvas, 3000);
  } else if (result == "apple") {
    context.drawImage(apple, 300, 125);
    window.setTimeout(resetCanvas, 3000);
  } else if (result == "orange") {
    context.drawImage(orange, 300, 125);
    window.setTimeout(resetCanvas, 3000);
  } else if (result == "pineapple") {
    context.drawImage(pineapple, 300, 125);
    window.setTimeout(resetCanvas, 3000);
  } else if (result == "strawberry") {
    context.drawImage(strawberry, 300, 125);
    window.setTimeout(resetCanvas, 3000);
  } else if (result == "help") {
    var text =
      "Say a name of the object on the screen. Say 'About', to hear about the program.";
    var x = new SpeechSynthesisUtterance();
    x.text = text;
    x.lang = "en-US";
    speechSynthesis.speak(x);
  } else if (result == "about") {
    var text = "Bryan Sanchez copyright 2022";
    var x = new SpeechSynthesisUtterance();
    x.text = text;
    x.lang = "en-US";
    speechSynthesis.speak(x);
  } else {
    context.fillStyle = "black";
    context.font = "30px Arial";
    context.fillText("Item not listed or speech is unclear", 300, 175);
    window.setTimeout(resetCanvas, 3000);
  }
}
function resetCanvas() {
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "black";
  context.font = "30px Arial";
  context.fillText("Banana", 50, 50);
  context.fillText("Apple", 50, 150);
  context.fillText("Orange", 50, 250);
  context.fillText("Pineapple", 50, 350);
  context.fillText("Strawberry", 50, 450);
}
