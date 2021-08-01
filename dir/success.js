const chalk = require('chalk');

function success(){
    return console.log(`${chalk.green('[')} Successfully Created ${chalk.green(']')}\nFile name: ${chalk.bgGreen.black(' result.json ')}\n`);
}

module.exports = success;