<h3 align="center">Sample-Backend</h3>

<div align="center">
v1.2.1
</div>

---
## Table of Contents
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Resources](#resources)
- [Acknowledgments](#acknowledgement)

## Getting Started <a name = "getting_started"></a>
Run the sampledb.sql dump with the below command to get the PostgreSQL DB up and running or create your own using the commands inside...
```
psql -h 127.0.0.1 -U postgres -f sampledb.sql local
```
*Note:* _This has not been formally tested, feel free to use the commands in the file to generate the database. Password for the provided user (-U postgres) should be password_

Create your own .env file with the necessary connection string details. See the example pattern illustrated in [.env.example](https://github.com/ysolomon/sample-backend/blob/master/.env.example) for reference.

Run the start script 
```
npm start
```

If all goes well, open your browser to http://localhost:3000/ and you will be greeted with an example message.

See the [Troubleshooting](https://github.com/ysolomon/sample-backend/wiki/Troubleshooting) section in the wiki for additional information.

## Usage <a name="usage"></a>
Using the endpoints below, you can execute basic Create, Read, Update, and Delete (CRUD) operations against the PostgreSQL instance using model data (src/database/model.ts).

| REST Function | Endpoint   | Description             |
| ------------- | ---------- | ----------------------- |
| GET           | /          | Health Check            |
| GET           | /users/    | Get All Users           |
| GET           | /user/     | Get a Single User       |
| POST          | /users/    | Create a Single User    |
| PUT           | /users/    | Update an Existing User |
| DELETE        | /users/    | Delete an Existing User |

See the Readme.MD in the tests/ folder for more on Testing.

Updated for v1.2.1 of Sample-Backend.

## Resources <a name = "resources"></a>
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Pg-Promise](https://github.com/vitaly-t/pg-promise) - Database Middleware
- [Heroku](https://heroku.com/) - Live Cloud Platform
- [Newman](https://github.com/postmanlabs/newman) - CLI for Postman Test Coverage
- [Typescript](https://www.typescriptlang.org/) - Static Type Definitions
- [DotEnv](https://github.com/motdotla/dotenv) - Environment Variables
- [Passport](http://www.passportjs.org/) - Authentication Strategy

## Acknowledgements <a name = "acknowledgement"></a>
Special Thanks
- [@tj](https://github.com/tj) and [@dougwilson](https://github.com/dougwilson) - Original author and current maintainer of Express
- [@petkaantonov](https://github.com/petkaantonov) - Bluebird
- [@motdotla](https://github.com/motdotla) - DotEnv
- [@vitaly-t](https://github.com/vitaly-t) - Pg-Promise and Pg-Monitor
- [@jaredhanson](https://github.com/jaredhanson) - Passport
- [@postmanlabs](https://github.com/postmanlabs) - Newman
