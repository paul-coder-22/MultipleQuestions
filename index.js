var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question('What is your name ? ');
console.log(`Welcome ${userName} , Let's see How well you Know about Football ?`);
/* initial value */
let count = 0;


/* players those are already did  score */
let players = [
  {name:"paul" , score : 5},
  {name:"Micheal" , score : 3}
]

/* result function to get the score */
const checkResult = (question,answer) => {

   customQuestion = readlineSync.question(question, {
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
  {question:"Which country won the first ever World Cup in 1930 ? " ,answer:"Uruguay"},
  {question:"Which country has won the most World Cups ? ",answer:"Brazil"},
  {question:"The record number of World Cup goals is 16, scored by who ? ",answer:"Miroslav Klose"},
  {question:"The 2026 World Cup will be hosted across three different countries. Can you name one of them ? ",answer:"United States"},
  {question:"Who of the following was awarded the Golden Ball or the Best Player Award at the 2018 FIFA World Cup ? ",answer:"Luka Modric"},
  {question:"Which team was awarded the FIFA Fair Play Award at the World Cup 2014 tournament ? ",answer:"Columbia"},
  {question:"Who was selected for the Man of the Match Award in the finals of World Cup 2014 ? ",answer:"Mario Gotze"},
  {question:"Bayern Munich, which won the final of the FIFA Club World Cup in Qatar, is the football club of which country? ? ",answer:"Germany"},

]
/* passing all question */
const getAllQuestion = () => {
  questionArray.map(e => checkResult(e.question,e.answer))
}

/* got the member score */
const getMemberScore = () => {
  console.log("Check out the high scores, if your score match with any table topper then ping me and I'll update it");
  players.map(e => {
    console.log(`${e.name} score : ${e.score}`);
  })
console.log("---------------------------");
  count >= players[1].score ? console.log(chalk.blue("You Nailed It..")) : console.log(chalk.red("Try your luck next time..")); 
}


/* user score */
const getLastscore = () =>  count >= 2 ?
 console.log(chalk.greenBright(`${userName} score ${count}  💥`)) : 
 console.log(chalk.redBright(`${userName} score ${count}  🤐`)); 

getAllQuestion();
getMemberScore();
getLastscore();