var readlineSync = require('readline-sync');
const chalk = require('chalk');
// console.log('\x1b[33m%s\x1b[31m')
var userName = readlineSync.question('What is your name ? ');
console.log(`Welcome ${userName} , Let's see How well you Know about Football ?`);
/* initial value */
let count = 0;
/* players those are already did  score */

/* players those are already did  score */
let players = [
  {name:"paul" , score : 4},
  {name:"Micheal" , score : 2}
]

/* result function to get the score */
const checkResult = (question,answer) => {

   customQuestion = readlineSync.question(question.toUpperCase(), {
    trueValue: [answer.toUpperCase()],
  });
  if(customQuestion == true){
    console.log(chalk.green("✅ Correct answer !"));
    count += 1;
  }else{
    console.log(chalk.red(`❌ Wrong answer ! `));
  }
  console.log(chalk.yellowBright(`Your Score : ${count}`));
  console.log(`-----------------------`);
}

questionArray = [
  {question:"Which country won the first ever World Cup in 1930?" ,answer:"Uruguay"},
  {question:"Which country has won the most World Cups?",answer:"Brazil"},
  {question:"The record number of World Cup goals is 16, scored by who?",answer:"Miroslav Klose"},
  {question:"The 2026 World Cup will be hosted across three different countries. Can you name them?",answer:"United States Canada Mexico"},
]
/* passing all question */
const getAllQuestion = () => {
  questionArray.map(e => checkResult(e.question,e.answer))
}

/* got the member score */
const getMemberScore = () => {
  console.log("Check out the high scores, if you should be there ping me and I'll update it");
  players.map(e => {
    console.log(`${e.name} score : ${e.score}`);
  })
  count >= players[1].score ? console.log(chalk.blue("You Nailed It..")) : ""; 
}



/* user score */
const getLastscore = () =>  count >= 2 ? console.log(count + " 💥") : console.log(count + " 🤐"); 

getAllQuestion();