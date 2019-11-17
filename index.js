const express = require('express'); // Initialize Express..
const routerEndpoints = require('./routers/router.js');
//const {database} = require('./model/database_config.js'); // Initialize database..
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const router = express.Router();

// Startup port, log to console
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT || port}!`));

app.use(bodyParser.json());
// Allows for parsing of nested JSON
app.use(bodyParser.urlencoded({ extended: true }));

// MUST BE AFTER BODY PARSER
app.use('/api', router);

router.get('/users', routerEndpoints.getAllUsers);
router.get('/users/:id', routerEndpoints.getSingleUser);
router.post('/users', routerEndpoints.createSingleUser);
router.put('/users/:id', routerEndpoints.updateSingleUser);
router.delete('/users/:id', routerEndpoints.deleteSingleUser);

// Home/splash page will return Hello World!
app.get('/', (request, response) => {
    response.send('Sample-Backend Hello World!')
});

module.exports = app;