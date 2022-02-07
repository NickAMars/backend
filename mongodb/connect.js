// const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const url =
  "mongodb+srv://nick:password-1@groupcolor.tiw5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   // console.log(collection);
//   client.close();
// });

// if it already exist
