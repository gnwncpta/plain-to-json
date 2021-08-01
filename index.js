const fs = require('fs');
const chalk = require('chalk');
let globalData = [];

fs.readFile('./plain.txt', { encoding: 'utf-8' }, (err, data) => {
    if(err){
        return console.log(`❌ ${chalk.bgRed.black(' Error ')} Maybe the file name doesn't correct!`);
    }

    let arr = data.split('\n');

    arr.forEach(item => {
        let spl = item.split(' | ');

        // Edit the destructuring array name as want as you want
        const [ fullName, firstName, lastName, email ] = spl;

        // | Edit the key object |
        // if you want to modify as want as you want
        globalData.push(
            {
                "full_name": fullName,
                "first_name": firstName,
                "last_name": lastName,
                "email": email
            }
        );
    });

    const result = {
        data: globalData
    }

    const objectBuffer = new Uint8Array(Buffer.from(JSON.stringify(result)));

    fs.writeFile('result.json', objectBuffer, (err) => {
        if(err) throw err;

        console.log(chalk.green('✅ Success created result.json'));
    });

});
