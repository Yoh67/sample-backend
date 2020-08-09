const bluebird = require('bluebird'); // Best promise library to date..
const monitor = require('pg-monitor');

// Initialize pg-promsie with options..
const initOptions = { 
    /// Bluebird initialization as promise library
    promiseLib: bluebird,
};

// Attach pgmonitor
monitor.attach(initOptions);

// Initialize the library..
const pgp = require('pg-promise')(initOptions);

// Establish database connection..
const database = pgp(process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_BLUE_URL);

module.exports = {database, pgp};