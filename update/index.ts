

import * as expressFunction from 'azure-function-express';
import { Server } from './server';
const server = Server.bootstrap();
// Binds the express app to an Azure Function handler
export = expressFunction.createAzureFunctionHandler(server.app);