//the dev and the test file shouldnt be here but just for running perposise im proving them 

if (process.env.NODE_ENV.trim() == "dev") {
  module.exports = require("./env/dev");
} else {
  module.exports = require("./env/test");
}
