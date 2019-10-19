const {database} = require('../model/database_config.js'); // Initialize database..

module.exports.test = function (request, response) {
    database.any('SELECT * FROM sample_table WHERE user_id = $1', request.params.id)
        .then(data => {
            response.send('GET successful! \nData: ' + 
                JSON.stringify(data)
            );
    })
    .catch(error => {
        console.log("Error");
        response.send(error);
    });
};

// const router = express.Router();

// const handlerFn = function (request, response) {
//     if (request.query) {
//         const test = `SELECT * FROM sample_table`.execute();

//         return response.status(200).JSON(test);
//     } else {
//         return response.status(400).JSON(test);
//     }
// }

// // Return all users
// router.get('/users', handlerFn);
// app.use('/api', router);