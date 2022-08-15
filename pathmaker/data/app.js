//////////////////////////////////////////////////////
////////////// MONGODB INITIALISATION ////////////////
//////////////////////////////////////////////////////

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:4000';

// Database Name
const dbName = 'Pathmaker';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

