const express = require("express"),
  cors = require("cors"),
  bodyParse = require("body-parser");
const group = require("./controller/group");
require("./mongodb/connect");
const app = express();

// for bodies recieve from front end
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

// cors policy for security
app.options("*", cors());
app.use(cors());

// port where server is running
process.env.PORT = 8080;
const version = process.env.npm_package_version;

app.get(`/api/${version}/groups`, group.getAllUser);
app.post(`/api/${version}/groups`, group.createGroup);


// middle ware for handling errors
app.use((err, req, res, next)=>{
        const status = error.status || 500;
        res.status(status).send({url: req.originalUrl, message: err.message})
})

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
