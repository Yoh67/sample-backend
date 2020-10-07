import bluebird from 'bluebird';
import monitor from 'pg-monitor';
import pgPromise from 'pg-promise';
import {IMain} from 'pg-promise';

const initOptions = {
    // Designate bluebird as promise library
    promiseLib: bluebird,
};

// Initialize pg-promise
const pgp: IMain = pgPromise(initOptions);

const cn = process.env.NODE_ENV === 'production' ? {
    host: (String(process.env.HEROKU_DATABASE_HOST)),
    port: (Number(process.env.HEROKU_DATABASE_PORT)),
    database: (String(process.env.HEROKU_DATABASE_NAME)),
    user: (String(process.env.HEROKU_DATABASE_USER)),
    password: (String(process.env.HEROKU_DATABASE_PASS))
} : {
    host: 'localhost',
    port: 5432,
    database: 'myDatabase',
    user: 'myUser',
    password: 'myPassword'
};

// Establish database connection
const Database = pgp(cn);
// const Database = pgp(String(process.env.NODE_ENV === 'production' ? process.env.HEROKU_DATABASE_URL : process.env.LOCAL_DATABASE_URL));



// Attach pgmonitor
monitor.attach(initOptions, [
    'connect',
    'disconnect',
    'error'
]);
monitor.setTheme('matrix');

export {Database, pgp};