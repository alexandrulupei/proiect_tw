const { viewTabelar } = require('../views/templates');

function tabelarController(req, res) {
 
    switch(req.method) {
        case "GET" : 
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(viewTabelar, 'utf8');
            break;
        default :
            res.writeHead(405);
            res.end();
    }
}

module.exports = {
    tabelarController
}