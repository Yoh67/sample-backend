import express from 'express';
import bodyParser from 'body-parser';
import {InitializeUserRouters} from './users/router';
import {InitializeDatabaseRouters} from './database/router';

const app = express();

// Startup port
app.listen(process.env.APP_PORT,
    () => console.info(`Sample-Backend listening on port ${process.env.APP_PORT}!`));

// Allows for parsing of nested JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize Routers
InitializeDatabaseRouters();
InitializeUserRouters();

// "Hello World" uptime health check
app.get('/', (request, response) => {
    response.send('Sample-Backend Hello World!');
});

export {app};