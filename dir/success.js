const chalk = require('chalk');
const filesize = require('file-size');

function success(size){
    return console.log(`${chalk.green('[')} Successfully Created ${chalk.green(']')}\nFile name: ${chalk.bgGreen.black(' result.json ')}\nFile Size: ${chalk.yellow(`${filesize(size).human()}`)}`);
}

module.exports = success;