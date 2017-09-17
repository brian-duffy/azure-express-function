import express = require('express');


export class AppRouter {
    public applicationRouter: express.Router;

    constructor() {
        this.applicationRouter = express.Router();
        this.setGetRoutes();
        this.setPostRoutes();
    }

    private setGetRoutes(): void {
        this.applicationRouter.get('/', (request: express.Request, response: express.Response) => {
            const testData = {
                firstName: 'Hello',
                lastName: 'World'
            };
            response.send(testData);
        });
    }

    private setPostRoutes(): void {
        this.applicationRouter.post('/', (request: express.Request, response: express.Response) => {
            const testData = {
                firstName: 'Hello',
                lastName: 'World'
            };
            response.send(testData);
        });

    }
}
