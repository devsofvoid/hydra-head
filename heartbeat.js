const {check} = require('./utils');
const fs = require('fs');
module.exports.heartbeat = function (id, address, res) {
    console.log(`[HEARTBEAT] New node tried to connect: ${address} [${id}]`);
    check(address, function (status, host, e=null){
        console.log(status, host);
        if(status==1) {

            fs.readFile('./nodes.txt', 'utf8' , (err, data) => {
                if (err) {console.error(err);return}
                if(data.includes(host)) {return;} else {
                    fs.writeFile('./nodes.txt', `${host}\n`, { flag: 'a+' }, err => {
                        if (err) {console.error(err);return}
                    })
                }
            })
            res.send({
                'type': 'ok',
                'message': `Node ID:${id} with address ${address} added to queue`
            })
        } else {
            res.send({
                'type': 'error',
                'message': `Node ID:${id} with address ${address} not respond to head correctly`,
                'debug': JSON.stringify(e)
            })
        }
    });
}