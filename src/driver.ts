import express from 'express';
import bodyParser from 'body-parser';
import {Database} from './database/config';
import {GET, POST, PUT, DELETE} from './utils/handler_util';

const app = express();

// Startup port
app.listen(process.env.APP_PORT,
    () => console.info(`Sample-Backend listening on port ${process.env.APP_PORT}!`));

// Allows for parsing of nested JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define if POST is best for this
POST('/init', req => {
    return Database.task('init', async (t: any) => {
        return t.user || await t.users.init(req.body);
    });
});

// Find all users
GET('/users', () =>  {
    return Database.task('get-all-users', async (t: any) => {
        return t.user || await t.users.findAllUsers();
    });
});

// Find a single user
GET('/users/:userid', (req: any) => {
    return Database.task('get-user', async (t: any) => {
        return t.user || await t.users.findUser(req.params.userid);
    });
});

// Add a user
POST('/users', req => {
    return Database.task('add-user', async (t: any) => {
        return t.user || await t.users.add(req.body);
    });
});

// Add a user
PUT('/users', req => {
    return Database.task('update-user', async (t: any) => {
        return t.user || await t.users.update(req.body);
    });
});

// Find a single user
DELETE('/users/:userid', (req: any) => {
    return Database.task('delete-user', async (t: any) => {
        return t.user || await t.users.delete(req.params.userid);
    });
});

// "Hello World" uptime health check
app.get('/', (request, response) => {
    response.send('Sample-Backend Hello World!');
});

export {app};