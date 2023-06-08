const { viewGrafic } = require('../views/templates');

function graficController(req, res) {
 
    switch(req.method) {
        case "GET" : 
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(viewGrafic, 'utf8');
            break;
        default :
            res.writeHead(405);
            res.end();
    }
}

module.exports = {
    graficController
}