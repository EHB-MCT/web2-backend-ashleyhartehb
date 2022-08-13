//////////////////////////////////////////////////////
////////////// MONGODB INITIALISATION ////////////////
//////////////////////////////////////////////////////

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:<password>@cluster0.j8rzj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//////////////////////////////////////////////////////
////////////// EXPRESS INITIALISATION ////////////////
//////////////////////////////////////////////////////

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Pathmaker server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

