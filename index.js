// Initialize Express..
var express = require('express');
var routerEndpoints = require('./utils/router');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;
var router = express.Router();

// Startup port, log to console
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT || port}!`));

// Allows for parsing of nested JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

module.exports = {app};