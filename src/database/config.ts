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

// Can be extrapolated into a separate config/ file for multiple connections
const connection = process.env.NODE_ENV === 'production' ? {
    host: (String(process.env.HEROKU_DB_HOST)),
    port: (Number(process.env.HEROKU_DB_PORT)),
    database: (String(process.env.HEROKU_DB_NAME)),
    user: (String(process.env.HEROKU_DB_USER)),
    password: (String(process.env.HEROKU_DB_PASS))
} : {
    host: (String(process.env.LOCAL_DB_HOST)),
    port: (Number(process.env.LOCAL_DB_PORT)),
    database: (String(process.env.LOCAL_DB_NAME)),
    user: (String(process.env.LOCAL_DB_USER)),
    password: (String(process.env.LOCAL_DB_PASS))
};

// Establish database connection
const Database = pgp(connection);

// Attach pgmonitor
monitor.attach(initOptions, [
    'connect',
    'disconnect',
    'error'
]);
monitor.setTheme('matrix');

export {Database, pgp};