const {database} = require('../model/database_config.js'); // Initialize database..

// Get All
module.exports.getAllUsers = function (request, response) {
    database.any('SELECT * FROM sample_table')
        .then(data => {
            response.send('GET successful! \nData: ' + 
                JSON.stringify(data)
            );
    })
    .catch(error => {
        console.log("Error");
    });
}

// Get Single User
module.exports.getSingleUser = function (request, response) {
    database.any('SELECT * FROM sample_table WHERE user_id = $1', request.params.id)
        .then(data => {
            response.send('GET successful! \nData: ' + 
                JSON.stringify(data)
            );
    })
    .catch(error => {
        console.log('Error:', error);
    });
};