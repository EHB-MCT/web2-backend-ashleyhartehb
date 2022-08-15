//////////////////////////////////////////////////////
////////////// MONGODB INITIALISATION ////////////////
//////////////////////////////////////////////////////
const {
  MongoClient,
  ServerApiVersion
} = require('mongodb');
const assert = require('assert');

// Connection URL
const url = "mongodb+srv://admin:myKcalPal2020@cluster0.j8rzj.mongodb.net/?retryWrites=true&w=majority";


// Database Name
const dbName = 'Pathmaker';

// Create a new MongoClient
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});
// Use connect method to connect to the Server

async function connect() {
  client.connect(err => {
    console.log("Connected successfully to server");
    const collection = client.db(dbName).collection("Users");
    // perform actions on the collection object
    console.log(collection)
    client.close();
  });

////CREATE////
//insertOne///
//////////////
/////READ/////
//find
//findOne
//////////////
////UPDATE////
/*
const filter = { _id: 465 };
// update the value of the 'z' field to 42
const updateDocument = {
   $set: {
      z: 42,
   },
};
const result = await collection.updateOne(filter, updateDocument);
*/
//////////////
////DELETE////
//deleteOne()
//deleteMany()
/*
const doc = {
  pageViews: {
    $gt: 10,
    $lt: 32768
  }
};
const deleteResult = await collection.deleteOne(doc);
const deleteManyResult = await collection.deleteMany(doc);
*/
//////////////
}



//////////////////////////////////////////////////////
////////////// EXPRESS INITIALISATION ////////////////
//////////////////////////////////////////////////////

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Pathmaker server')
  res.send()
})

app.listen(port, () => {
  console.log(`Pathmaker app listening on port ${port}`)
})