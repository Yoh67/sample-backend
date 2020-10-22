import express from 'express';
import passport from 'passport';
import {InitializeSession} from './utils/session_util';
import {InitializeAuthorization} from './utils/authorization_util';
import {InitializeUserRouters} from './users/router';
import {InitializeDatabaseRouters} from './database/router';

const app = express();

// Initialize Session settings
InitializeSession();

// Initialize Passport with the Basic Auth strategy
InitializeAuthorization();

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