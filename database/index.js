const dotenv = require('dotenv').config(); // client:secret management, see .env.example..
const promise = require('bluebird'); // Best promise library to date..
const pgPromise = require('pg-promise'); //PostgreSQL interface for Node, Core library..

// Initialize pg-promsie with options..
const initOptions = { 
    promiseLib: promise
};

// Initialize the library..
const pgp = pgPromise(initOptions); 

// Establish database connection..
const database = pgp(process.env.DATABASE_URL || HEROKU_POSTGRESQL_BLUE_URL);

module.exports = {database, pgp};