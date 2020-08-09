const {database} = require('../model/database_config.js'); // Initialize database..

// All User Read
module.exports.getAllUsers = function (request, response) {
    database.any('SELECT * FROM users')
        .then(data => {
            response.type('json');
            response.send(JSON.stringify(data));
    })
    .catch(error => {
        console.log("Error");
    });
}

// Single User Read
module.exports.getSingleUser = function (request, response) {
    database.any('SELECT * FROM users WHERE userid = $1', request.params.id)
        .then(data => {
            response.type('json');
            response.send(JSON.stringify(data));
    })
    .catch(error => {
        console.log('Error:', error);
    });
};

// Single User Insert
module.exports.createSingleUser = function (request, response) {
    console.log(request.body);

    database.none('INSERT INTO users(\
            userid,\
            username,\
            password,\
            email,\
            first_name,\
            last_name,\
            language,\
            country,\
            street,\
            city,\
            state,\
            zip_code,\
            created_date,\
            updated_date\
        ) VALUES($1,\
            $2,\
            $3,\
            $4,\
            $5,\
            $6,\
            $7,\
            $8,\
            $9,\
            $10,\
            $11,\
            $12,\
            CURRENT_TIMESTAMP,\
            NULL\
        )', 
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
    ]).then(function() {
        response.send('Inserted successfully! \n' +
            request.params.id +
            ' is now cached.');
        })
    .catch(error => {
        response.send(error);
    });
};

// Single User Update
module.exports.updateSingleUser = function (request, response) {
    console.log(request.body);

    database.none('UPDATE users SET \
        username=$1,\
        password=$2,\
        email=$3,\
        first_name=$4,\
        last_name=$5,\
        language=$6,\
        country=$7,\
        street=$8,\
        city=$9,\
        state=$10,\
        zip_code=$11, \
        updated_date=CURRENT_TIMESTAMP where userId=$12',
    [
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
        request.body.address.zipCode,
        request.body.userId
    ]).then(function() {
        response.send('Updated user ' +
            requset.params.id +
            ' successfully!');
        response.status(200);
    })
    .catch(error => {
        response.send(error);
    });
};

// Single User Delete
module.exports.deleteSingleUser = function (request, response) {
    console.log(request.body);

    database.result(
        'DELETE FROM users WHERE userId=$1', 
        request.params.id
    ).then(result => {
        response.send('Deleted user ' +
            result.userId +
            ' successfully!');
    })
    .catch(error => {
        response.send(error);
    });
};