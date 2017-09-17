"use strict";
var expressFunction = require("azure-function-express");
var server_1 = require("./server");
var server = server_1.Server.bootstrap();
module.exports = expressFunction.createAzureFunctionHandler(server.app);
