import bluebird from 'bluebird'; 
import monitor from 'pg-monitor';

const initOptions = { 
    // Designate bluebird as promise library
    promiseLib: bluebird,
};

// Initialize pg-promise
const pgp = require('pg-promise')(initOptions);

// Attach pgmonitor
monitor.attach(initOptions, [
    'connect',
    'disconnect',
    'error'
]);
monitor.setTheme('matrix');

// Establish database connection
const Database = pgp(process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_BLUE_URL);

export {Database, pgp};