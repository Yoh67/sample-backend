import session from 'express-session';
import bodyParser from 'body-parser';
import {v4 as uuidv4} from 'uuid';
import {app} from '../driver';

type SessionOptions = session.SessionOptions;

const sess: SessionOptions = {
    genid: (request: any) => {
        return uuidv4(); // use UUIDs for session IDs
    },
    secret: (String(process.env.SESSION_SECRET)),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
};

export function InitializeSession() {
    if (app.get('env') === 'production') {
        app.set('trust proxy', 1); // trust first proxy
    }

    app.use(session(sess));

    // Allows for parsing of nested JSON
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}