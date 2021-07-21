var readlineSync = require('readline-sync');
const chalk = require('chalk');
// console.log('\x1b[33m%s\x1b[31m')
var userName = readlineSync.question('What is your name ? ');
console.log(`Welcome ${userName} , Let's see How well you Know about Football ?`);

