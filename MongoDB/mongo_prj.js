const MongoClint = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database name
const dbName = "new";

// create new mongo client
const client = new MongoClint(url);

// Use connect method to connect to the server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("it is connected succesfully");
    const db = client.db(dbName);
    client.close();
});
