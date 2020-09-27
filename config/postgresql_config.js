const bluebird = require('bluebird'); 
const monitor = require('pg-monitor');

// Initialize pg-promsie with options..
const initOptions = { 
    /// Designate bluebird as promise library
    promiseLib: bluebird,
};



// Attach pgmonitor
monitor.attach(initOptions, [
    'connect',
    'disconnect',
    'error'
]);
monitor.setTheme('matrix');

// Initialize pg-promise
const pgp = require('pg-promise')(initOptions);

// Establish database connection
const database = pgp(process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_BLUE_URL);

module.exports = {database, pgp};