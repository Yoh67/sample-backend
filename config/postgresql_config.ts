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

// Establish database connection
const Database = pgp(String(process.env.DATABASE_URL));

// Attach pgmonitor
monitor.attach(initOptions, [
    'connect',
    'disconnect',
    'error'
]);
monitor.setTheme('matrix');

export {Database, pgp};