const bluebird = require('bluebird'); // Best promise library to date..

// Initialize pg-promsie with options..
const initOptions = { 
    /// Bluebird initialization as promise library
    promiseLib: bluebird,
};

// Initialize the library..
const pgp = require('pg-promise')(initOptions);

const monitor = require('pg-monitor');

// Attach pgmonitor
monitor.attach(initOptions, [
    'connect',
    'disconnect',
    'error'
]);

monitor.setTheme('matrix');

// Establish database connection..
const database = pgp(process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_BLUE_URL);

module.exports = {database, pgp};