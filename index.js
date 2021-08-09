const fs = require('fs');
const success = require('./dir/success');
const error = require('./dir/error');
const fileSize = require('file-size');

let globalData = [];

// If you have another .txt file make sure change the file name on fs.readFile()
fs.readFile('./nordvpn.txt', { encoding: 'utf-8' }, (err, data) => {
    if(err){
        return error();
    }

    let arr = data.split('\n');

    arr.forEach(item => {
        let spl = item.split(' | ');

        // Edit the destructuring array name as want as you want
        const [ email, password ] = spl;

        // | Edit the key object |
        // if you want to modify as want as you want
        globalData.push(
            {
                "email": email,
                "password": password
            }
        );
    });

    const result = {
        data: globalData
    }

    const objectBuffer = new Uint8Array(Buffer.from(JSON.stringify(result)));

    fs.writeFile('result.json', objectBuffer, (err) => {
        if(err) throw err;

        let stats = fs.statSync('result.json');
        let fileSizeInBytes = stats.size;
        
        success(fileSizeInBytes);
    });

});
