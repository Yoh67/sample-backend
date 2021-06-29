import {InitializeApp, app} from './app';
import {InitializeAuthorization} from './utils/authorization_util';
import {InitializeUserRouters} from './users/router';


// Initialize Session settings
InitializeApp();

// Initialize Passport with the Basic Auth strategy
InitializeAuthorization();

// Initialize Routers
InitializeUserRouters();

// Startup port
app.listen(process.env.APP_PORT,
  () => console.info(`Sample-Backend listening on port ${process.env.APP_PORT}!`));