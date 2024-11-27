const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answers = [];

function askName() {
  rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
    answers.push(answer);
    askActivity();
  });
}

function askActivity() {
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);
    askListening();
  });
}

function askListening() {
  rl.question("What do you listen to while doing that? ", (answer) => {
    answers.push(answer);
    askMeal();
  });
}

function askMeal() {
  rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
    answers.push(answer);
    askFood();
  });
}

function askFood() {
  rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
    answers.push(answer);
    askSport();
  });
}

function askSport() {
  rl.question("Which sport is your absolute favourite? ", (answer) => {
    answers.push(answer);
    askSuperpower();
  });
}

function askSuperpower() {
  rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
    answers.push(answer);
    generateProfile();
  });
}

function generateProfile() {
  console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
  rl.close(); 
}

askName();
