// mongoose to connect to the mongodb database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema(
  {
    groups: Map
  },
  { strict: false  }
);

module.exports = mongoose.model("groups", GroupSchema);
