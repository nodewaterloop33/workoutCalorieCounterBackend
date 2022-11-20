const { MongoClient } = require("mongodb");
//require("dotenv").config();
//const { MONGO_URI } = process.env;
const config = require('./config')
const MONGO_URI = config.mongo_uri;

class Mongo {
    constructor() {
        const dbClient = new MongoClient(MONGO_URI);
        dbClient.connect();
        this.db = dbClient.db("calorie-counter");
    }

    getDB = () => this.db
}

module.exports = new Mongo();
