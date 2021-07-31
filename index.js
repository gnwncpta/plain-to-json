const fs = require('fs');
const chalk = require('chalk');
let globalData = [];

fs.readFile('./plain.txt', { encoding: 'utf-8' }, (err, data) => {
    if(err) throw err;

    console.log(chalk.green('✅ Success read data from plain.txt\n'));
    let arr = data.split('\n');

    arr.forEach(item => {
        let spl = item.split(' | ');
        const [ fullName, firstName, lastName, email ] = spl;

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

        console.log(chalk.green('✅ The file has saved to result.json'));
    });

});
