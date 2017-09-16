
import * as expressFunction from 'azure-function-express';
import * as express from 'express';
//const createAzureFunctionHandler = require("azure-function-express").createAzureFunctionHandler;

// Create express app as usual
const app = express();
app.get("/api/:foo/:bar", (req: any, res: any) => {
    res.json({
        foo: req.params.foo,
        bar: req.params.bar
    });
});
app.get("/api", (req: any, res: any) => {
    res.send({ hello: true })
});

// Binds the express app to an Azure Function handler
export = expressFunction.createAzureFunctionHandler(app);