const express = require("express"),
  cors = require("cors"),
  xss = require("xss-clean"),
  queryParser = require("express-query-int");
bodyParse = require("body-parser");
const group = require("./controller/group");
require("./mongodb/connect");
const app = express();

// for bodies recieve from front end
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(queryParser());
// port where server is running
process.env.PORT = 8080;
const version = process.env.npm_package_version;

if (process.env.NODE_ENV.trim() !== "test") {
  const whiteList = ["http://localhost:3000"];
  const corsOptions = {
    origin: function (origin, callback) {
      if (whiteList.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };
  // cors policy for security
  app.use(cors(corsOptions));
}
app.use(xss());
app.use((req, res, next) => {
  // disable cache
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});

//Routes
app.get(`/api/${version}/groups`, group.getAllUser);
app.post(`/api/${version}/groups`, group.createGroup);

// Not Found
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// middle ware for handling errors
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ url: req.originalUrl, message: err.message });
});

// Error handler B: Node's uncaughtException handler
// process.on("uncaughtException", function (err) {
//   console.log(`uncaughtException - ${err.message}`);
// });

app.listen(process.env.PORT);

module.exports = app;
