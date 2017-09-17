'use strict';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import { AppRouter } from './routes/appRoutes';

export class Server {
    public app: express.Application;
    public static bootstrap(): Server {
        return new Server();
    }
    constructor() {
        console.log('Initiating Node Server');
        this.app = express();
        this.config();
        this.routes();
    }
    private config() {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));
        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            console.log('Unfound page');
            err.status = 404;
            next(err);
        });
    }
    private routes() {
        this.app.use('/api', new AppRouter().applicationRouter);
    }
}
