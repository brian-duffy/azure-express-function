"use strict";
var expressFunction = require("azure-function-express");
var express = require("express");
//const createAzureFunctionHandler = require("azure-function-express").createAzureFunctionHandler;
// Create express app as usual
var app = express();
app.get("/api/:foo/:bar", function (req, res) {
    res.json({
        foo: req.params.foo,
        bar: req.params.bar
    });
});
app.get("/api", function (req, res) {
    res.send({ hello: true });
});
module.exports = expressFunction.createAzureFunctionHandler(app);
