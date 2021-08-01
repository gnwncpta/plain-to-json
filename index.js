const fs = require('fs');
const success = require('./dir/success');
const error = require('./dir/error');

let globalData = [];

fs.readFile('./plain.txt', { encoding: 'utf-8' }, (err, data) => {
    if(err){
        error();
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

        success();
    });

});
