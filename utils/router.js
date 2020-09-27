const {database} = require('../config/postgresql_config.js');

// All User Read
module.exports.getAllUsers = function (request, response) {
    if (JSON.stringify(request.body) === '{}') {
        database.any('SELECT * FROM users')
            .then(data => {
                response.type('json');
                response.status(200).send(JSON.stringify(data));
        })
        .catch(error => {
            response.status(500).send('Internal Server Error:', error);
        });
    } else {
        response.status(400).send('Bad Request');
    }
}

// Single User Read
module.exports.getSingleUser = function (request, response) {
    database.any('SELECT * FROM users WHERE userid = $1', request.params.id)
        .then(data => {
            response.type('json');
            response.status(200).send(JSON.stringify(data));
    })
    .catch(error => {
        console.log(error);
        response.status(400).send('Internal Server Error');
    });
};

// Single User Insert
module.exports.createSingleUser = function (request, response) {
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
        response.status(200).send(JSON.stringify(data));
    })
    .catch(error => {
        console.log(error);
        response.status(400).send('Internal Server Error');
    });
};

// Single User Update
module.exports.updateSingleUser = function (request, response) {
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
        response.status(200).send(JSON.stringify(data));
    })
    .catch(error => {
        console.log(error);
        response.status(400).send('Internal Server Error');
    });
};

// Single User Delete
module.exports.deleteSingleUser = function (request, response) {
    if (JSON.stringify(request.body) === '{}') {
        database.result('DELETE FROM users WHERE userId=$1', request.params.id)
        .then(result => {
            response.status(200).send(JSON.stringify(data));
        })
        .catch(error => {
            response.status(500).send('Internal Server Error');
        });
    } else {
        console.log(error);
        response.status(400).send('Internal Server Error');
    }
};