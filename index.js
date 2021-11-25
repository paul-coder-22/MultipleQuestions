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
const checkResult = (question,answer,options) => {

   console.log(chalk.cyanBright.bold(question));

   options.map((e,i) => console.log(i +1 + ") " + e));

   customQuestion = readlineSync.question("Write your answer ? ", {
    trueValue: [answer.toUpperCase()],
  });

  if(customQuestion == true){
    console.log(chalk.green("✅ Correct answer !"));
    count += 1;
  }else{
    console.log(chalk.red(`❌ Wrong answer ! `));
    createspace()
    console.log("Correct answer : " + chalk.green(answer))
   createspace()
  }
  console.log(chalk.yellowBright(`Your Score : ${count}`));
  console.log(`-----------------------`);
  }

questionArray = [
  {
    question:"Which country won the first ever World Cup in 1930 ? " ,
    answer:"Uruguay",
    options :['Spain','Uruguay','Brazil','Portugal']
  },
  {
    question:"Which country has won the most World Cups ? ",
    answer:"Brazil",
    options :['Spain','Uruguay','Brazil','Portugal']
  },
  {
    question:"The record number of World Cup goals is 16, scored by who ? ",
   answer:"Miroslav Klose",
   options :['Messi','Miroslav Klose','Mario Gotse','David Beckham']
  },
  {
    question:"The 2026 World Cup will be hosted across three different countries. Can you name one of them ? ",
    answer:"United States",
    options :['Spain','United States','Brazil','England']},
  {
    question:"Who of the following was awarded the Golden Ball or the Best Player Award at the 2018 FIFA World Cup ? ",
    answer:"Luka Modric",
    options :['Luka Modric','Cristiano Ronaldo','Thomas Müller','Philipp Lahm']
  },
  {
    question:"Which team was awarded the FIFA Fair Play Award at the World Cup 2014 tournament ? ",
    answer:"Columbia",
    options :['Japan','Argentina','Columbia','Portugal']
    },
  {
    question:"Who was selected for the Man of the Match Award in the finals of World Cup 2014 ? ",
    answer:"Mario Gotze",
    options :['Lionel Messi','Diego Forlán','Mario Gotze','Oliver Kahn']
  },
  {
    question:"Bayern Munich, which won the final of the FIFA Club World Cup in Qatar, football club belong to  which country ?",
    answer:"Germany",
    options :['Spain','Germany','Brazil','Portugal']
  }
]
/* passing all question */
const getAllQuestion = () => {
  questionArray.map(e => checkResult(e.question,e.answer,e.options))
}

/* got the member score */
const getMemberScore = () => {
  console.log("Check out the high scores, if your score match with any table topper then ping me and I'll update it");
  players.map(e => {
    console.log(`${e.name} score : ${e.score}`);
  })
console.log("---------------------------");
  count >= players[1].score ? console.log(chalk.blue.bold("You Beat The Highest Score")) : console.log(chalk.red("Try your luck next time..")); 
}

const createspace = () => {
  console.log()
}
/* user score */
const getLastscore = () =>  count >=  players[1].score ?
 console.log(chalk.greenBright(`${userName} score ${count}  💥`)) : 
 console.log(chalk.redBright(`${userName} score ${count}  🤐`)); 

getAllQuestion();
getMemberScore();
getLastscore();