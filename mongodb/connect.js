// const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
// change url to another url in test
let url = "";
if (process.env.NODE_ENV.trim() === "test") {
  url =
    "mongodb+srv://nick:password-1@groupcolor.tiw5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
} else {
  url =
    "mongodb+srv://nick:password-1@groupcolor.xlplu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
}
mongoose.Promise = global.Promise;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
