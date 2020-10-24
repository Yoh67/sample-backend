import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import {v4 as uuidv4} from 'uuid';

type SessionOptions = session.SessionOptions;

const app = express();

// "Hello World" uptime health check
app.get('/',
  passport.authenticate('basic', { session: false }),
  (request, response) => {
    response.send('Sample-Backend Hello World!');
});

const sess: SessionOptions = {
    genid: (request: any) => {
        return uuidv4(); // use UUIDs for session IDs
    },
    secret: (String(process.env.SESSION_SECRET)),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
};

export function InitializeApp() {
    if (app.get('env') === 'production') {
        app.set('trust proxy', 1); // trust first proxy
    }

    app.use(session(sess));

    // Allows for parsing of nested JSON
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}

export {app};