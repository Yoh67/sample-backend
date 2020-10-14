import express from 'express';
import bodyParser from 'body-parser';
import {Database} from './database/config';
import * as userRouter from './users/users.router';
import { Users } from './users/users.router.new';

const app = express();
const router = express.Router();

// Startup port, log to console
app.listen(process.env.APP_PORT,
    () => console.info(`Sample-Backend listening on port ${process.env.APP_PORT}!`));

// Allows for parsing of nested JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// BodyParser config needs to come before routers are exposed
app.use('/api', router);

// router.get('/users', userRouter.getAllUsers);
// router.get('/users/:id', userRouter.getSingleUser);
router.post('/users', userRouter.createSingleUser);
router.put('/users', userRouter.updateSingleUser);
router.delete('/users/:id', userRouter.deleteSingleUser);

//////////////////////////////////////////////
// Users Web API
//////////////////////////////////////////////

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
//// =============================================================
// add a new user, if it doesn't exist yet, and return the object:
// GET('/users/add/:name', req => {
//     return db.task('add-user', async t => {
//         const user = await t.users.findByName(req.params.name);
//         return user || await t.users.add(req.params.name);
//     });
// });

// // find a user by id:
// GET('/users/find/:id', (req: any) => db.users.findById(req.params.id));

// // remove a user by id:
// GET('/users/remove/:id', (req: any) => db.users.remove(req.params.id));

// Add a user
POST('/users', req => {
    return Database.task('add-user', async (t: any) => {
        return t.user || await t.users.add(req.body);
    });
});

// Generic GET handler;
function GET(url: string, handler: (req: any) => any) {
    app.get(url, async (req, res) => {
        try {
            const data = await handler(req);
            res.json({
                success: true,
                data
            });
        } catch (error) {
            res.json({
                success: false,
                error: error.message || error
            });
        }
    });
}

// Generic POST handler;
function POST(url: string, handler: (req: any) => any) {
    app.post(url, async (req, res) => {
        try {
            const data = await handler(req);
            res.json({
                success: true,
                data
            });
        } catch (error) {
            res.json({
                success: false,
                error: error.message || error
            });
        }
    });
}


// GET request at app's home directory should return "Hello World!"
app.get('/', (request, response) => {
    response.send('Sample-Backend Hello World!')
});

module.exports = {app};