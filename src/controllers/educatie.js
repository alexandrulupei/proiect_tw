// const imageRepositoryEducatie = require("../models/imageRepositoryEducatie");
const dataRepository = require("../models/countyModel");


async function educatieController(req, res){
    try {
        const products = await dataRepository.getCollection("educatie");
        
        res.writeHead(200, { "Content-Type": "application/json" });
        
        res.end(JSON.stringify(products));
       // console.log(products)

      } catch (err) {
        console.log(err);
    
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify(err));
      }
}


module.exports = {
    educatieController
}