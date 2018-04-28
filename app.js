var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require("body-parser");
var path = require('path');
var routes = require("./routes/routes.js");
var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'frontend')));

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});
