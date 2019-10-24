const express = require('express'); // Initialize Express..
const {database} = require('./model/database_config.js'); // Initialize database..

const routerEndpoints = require('./routers/router.js');

const app = express();
const port = 3000;

const router = express.Router();

// Startup port, log to console
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT || port}!`));

app.use('/api', router);

router.get('/users', routerEndpoints.getAllUsers);
router.get('/users/:id', routerEndpoints.getSingleUser);
//router.post('/users/:id', routerEndpoints.createSingleUser);

// Home/splash page will return Hello World!
app.get('/', (request, response) => {
    response.send('sample-backend Hello World!')
});

// POST insert user
app.post('/insert/:id', function (request, response) {
    database.one('INSERT INTO sample_table(user_id, message) VALUES($1, $2) RETURNING user_id', 
    [request.params.id, 'Auto Insert '.concat(request.originalUrl)])
        .then(data => {
            response.send('Inserted successful! \n' +
                request.params.id +
                ' is now cached.');
        })
        .catch(error => {
            response.send(error);
        });
});