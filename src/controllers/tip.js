const dataRepository = require("../models/dataRepository");


async function tipController(req, res){
    try {
        const products = await dataRepository.getCollection("tip");
        
        res.writeHead(200, { "Content-Type": "application/json" });
        
        res.end(JSON.stringify(products));
        console.log(products)

      } catch (err) {
        console.log(err);
    
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify(err));
      }
}


module.exports = {
    tipController
}