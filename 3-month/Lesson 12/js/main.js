//? Webkit speech recognition
// const recognition = new webkitSpeechRecognition();
// const speechRecognitionList = new webkitSpeechGrammarList();

// recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
// recognition.lang = "en-US";
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// document.body.onclick = () => {
//   recognition.start();
//   console.log("Ready to receive a color command.");
// };

// const arr = ["qizil", "yashil", "ko'k"];

// recognition.onresult = (event) => {
//   const saidColor = event.results[0][0].transcript;
//   console.log(saidColor);
//   document.querySelector("#text").innerHTML += saidColor;
//   document.body.style.background = saidColor;
// };

//? 