const express = require('express'); // Initialize Express..
const {database} = require('./model/database_config.js'); // Initialize database..

const routerEndpoints = require('./routers/router.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const router = express.Router();

// Startup port, log to console
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT || port}!`));

app.use('/api', router);
app.use(bodyParser.json());
// allow json sub/extended objects
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/users', routerEndpoints.getAllUsers);
router.get('/users/:id', routerEndpoints.getSingleUser);
//router.post('/users/:id', routerEndpoints.createSingleUser);

// Home/splash page will return Hello World!
app.get('/', (request, response) => {
    response.send('sample-backend Hello World!')
});

// POST insert user table
app.post('/users', function (request, response) {
    console.log(request.body);

    database.none('INSERT INTO users(userid, username, password, email, first_name, last_name, language, country, street, city, state, zip_code, created_date, updated_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, DEFAULT, NULL)', 
    [
        request.body.userId,
        request.body.account.username,
        request.body.account.password,
        request.body.email,
        request.body.firstName,
        request.body.lastName,
        request.body.language,
        request.body.address.country,
        request.body.address.street,
        request.body.address.city,
        request.body.address.state,
        request.body.address.zipCode
    ]).then(data => {
        response.send('Inserted successful! \n' +
            request.params.id +
            ' is now cached.');
        })
        .catch(error => {
            response.send(error);
        });
});

// POST insert user sample_table
app.post('/insert/:id', function (request, response) {
    console.log(request.body);

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