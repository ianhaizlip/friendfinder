//require
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//activate express
const app = express();
const port = 3000;   
// process.env.port || 

//use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//dealing with routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(port, function() {
  console.log("App listening on port: " + port);
});