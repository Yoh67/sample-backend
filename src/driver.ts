import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import {InitializeAuthorization} from './utils/authorization_util';
import {InitializeUserRouters} from './users/router';
import {InitializeDatabaseRouters} from './database/router';

const app = express();

// Initialize Passport with the Basic Auth strategy
InitializeAuthorization();

// Allows for parsing of nested JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize Routers
InitializeDatabaseRouters();
InitializeUserRouters();

// Startup port
app.listen(process.env.APP_PORT,
  () => console.info(`Sample-Backend listening on port ${process.env.APP_PORT}!`));

// "Hello World" uptime health check
app.get('/',
  passport.authenticate('basic', { session: false }),
  (request, response) => {
    response.send('Sample-Backend Hello World!');
});

export {app};