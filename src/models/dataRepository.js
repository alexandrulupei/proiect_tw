
// const dbUrl= 'mongodb+srv://admin:admin@atlascluster.vsdtg2f.mongodb.net/'

//const mongodb = require('mongodb')
// const ObjectId = mongodb.ObjectId
const getDb = require('./database').getDb



function getCollection(collection) {
  try {
  const db = getDb()
   return  db.collection(collection).find().toArray();
  }catch(err){
    console.log(err);
  }
}



module.exports = {
  getCollection
}