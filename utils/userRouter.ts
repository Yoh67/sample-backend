import {Database} from '../config/postgresql_config';

// All User Read
export function getAllUsers(request: any, response: any) {
    if (JSON.stringify(request.body) === '{}') {
        Database.any('SELECT * FROM users')
            .then((data: any) => {
                response.type('json');
                response.status(200).send(JSON.stringify(data));
        })
        .catch((error: any) => {
            response.status(500).send('Internal Server Error:', error);
        });
    } else {
        response.status(400).send('Bad Request');
    }
}

// Single User Read
export function getSingleUser(request: any, response: any) {
    Database.any('SELECT * FROM users WHERE userid = $1', request.params.id)
        .then((data: any) => {
            response.type('json');
            response.status(200).send(JSON.stringify(data));
    })
    .catch((error: any) => {
        console.log(error);
        response.status(400).send('Internal Server Error');
    });
};

// Single User Insert
export function createSingleUser(request: any, response: any) {
    Database.none('INSERT INTO users(\
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
    ]).then((data: any) => {
        response.status(200).send(JSON.stringify(data));
    })
    .catch((error: any) => {
        console.log(error);
        response.status(400).send('Internal Server Error');
    });
};

// Single User Update
export function updateSingleUser(request: any, response: any) {
    Database.none('UPDATE users SET \
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
    ]).then((data: any) => {
        response.status(200).send(JSON.stringify(data));
    })
    .catch((error: any) => {
        console.log(error);
        response.status(400).send('Internal Server Error');
    });
};

// Single User Delete
export function deleteSingleUser(request: any, response: any) {
    if (JSON.stringify(request.body) === '{}') {
        Database.result('DELETE FROM users WHERE userId=$1', request.params.id)
        .then((result: any) => {
            response.status(200).send('User deleted');
        })
        .catch((error: any) => {
            response.status(500).send('Internal Server Error');
        });
    } else {
        console.log(response.console.error());
        response.status(400).send('Internal Server Error');
    }
};