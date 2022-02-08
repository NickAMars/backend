// const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const config = require("../config")
// change url to another url in test
const url = config.MONGODBURL;
mongoose.Promise = global.Promise;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
