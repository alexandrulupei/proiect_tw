const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

let _database

const mongodbConnect = (callback) => {
    // const config = new Config();

    mongoClient
        .connect('mongodb+srv://admin:admin@atlascluster.vsdtg2f.mongodb.net/')
        // `mongodb+srv://${config['db_username']}:${config['db_password']}@${config['db_host']}/${config['db']}?${config['db_options']}`)
        // mongodb+srv://admin:admin@atlascluster.vsdtg2f.mongodb.net/
        .then(client => {
            _database = client.db('informatii')
            console.log("[database] Connected to mongodb database!")
            callback()
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const getDb = () => {
    if(_database) {
        return _database
    }
    else {
        
        throw 'No database found!'
    }
}

exports.mongodbConnect = mongodbConnect
exports.getDb = getDb