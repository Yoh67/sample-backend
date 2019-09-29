const express = require('express'); // Initialize Express..
const {database} = require('./database'); // Initialize database..

const app = express();
const port = 3000;

// Startup port, log to console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Home/splash page will return Hello World!
app.get('/', (request, response) => {
    response.send('sample-backend Hello World!' + 
    ' \nGET: ' +
    request.originalUrl)
});

// GET @ custom endpoint, then we propagate the query results
app.get('/read/:id', (request, response) => {
    database.any('SELECT * FROM sample_table WHERE user_id = $1', request.params.id)
        .then(data => {
            response.send('GET successful! \nData: ' + 
                JSON.stringify(data)
                );
        })
        .catch(error => {
            response.send(error);
        });
});

// GET @ custom endpoint, then we cache into our database
app.get('/insert/:id', (request, response) => {
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

app.post('/', function (request, response) {
    response.send("POST: " + request.originalUrl);
});