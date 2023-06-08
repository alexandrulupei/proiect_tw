const { viewCartografic } = require('../views/templates');

function cartograficController(req, res) {
 
    switch(req.method) {
        case "GET" : 
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(viewCartografic, 'utf8');
            break;
        default :
            res.writeHead(405);
            res.end();
    }
}

module.exports = {
    cartograficController
}