const chalk = require('chalk');

function error(){
    return console.log(`❌ ${chalk.bgRed.black(' Error ')} Maybe the file name doesn't correct!`);
}

module.exports = error;