const { viewLiniar } = require('../views/templates');

function liniarController(req, res) {
 
    switch(req.method) {
        case "GET" : 
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(viewLiniar, 'utf8');
            break;
        default :
            res.writeHead(405);
            res.end();
    }
}

module.exports = {
    liniarController
}