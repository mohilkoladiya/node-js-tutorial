const chalk = require('chalk')
const validator = require('validator')

// console.log(chalk.red.underline.inverse("error"));

const res  = validator.isEmail('admin123@gmail.com');
console.log(res === true ? chalk.green.inverse("Valied Email") : chalk.red.inverse("Invalied Email"));

// IIFEE
(function(){
    const a = "vinod ";
    console.log(a);
})();

console.log(__dirname);
console.log(__filename);