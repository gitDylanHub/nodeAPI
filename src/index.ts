import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import cors from 'cors';

import { CommonRoutesConfig } from './Common/routes.config';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: Number = 8081;
const routes: Array<CommonRoutesConfig> = [];


// here we are adding middleware to parse all incoming requests as JSON 
app.use(bodyparser.json());

// here we are adding middleware to allow cross-origin requests
app.use(cors());


// routes.push(new UsersRoutes(app));

/**
 * Default Route for the Base Application Health Check API. 
 */
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server up and running!`)
});

server.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
  routes.forEach((route: CommonRoutesConfig) => {
    console.info(`Configured Routes: ${route.getName}`)
  });
});
