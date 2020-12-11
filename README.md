<h3 align="center">Sample-Backend</h3>

<div align="center">
v1.2
</div>

---
## Table of Contents
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Resources](#resources)
- [Acknowledgments](#acknowledgement)

## Getting Started <a name = "getting_started"></a>
Run your PostgreSQL instance and create your own .env file with the connection string details. See the patern illustrated in [.env.example](https://github.com/ysolomon/sample-backend/blob/master/.env.example) for more information.

Run the start script 
```
npm start
```

if launched successfully, open your browser to http://localhost:3000/ and you will be greeted with an example message.

See the [Troubleshooting](https://github.com/ysolomon/sample-backend/wiki/Troubleshooting) section in the wiki for additional information.

## Usage <a name="usage"></a>
Using the endpoints below, you can execute basic Create, Read, Update, and Delete (CRUD) operations against the PostgreSQL instance using model data.

| REST Function | Endpoint   | Description             |
| ------------- | ---------- | ----------------------- |
| GET           | /          | Health Check            |
| GET           | /users/    | Get All Users           |
| GET           | /users/:id | Get a Single User       |
| POST          | /users/:id | Create a Single User    |
| PUT           | /users/:id | Update an Existing User |
| DELETE        | /users/:id | Delete an Existing User |

There are additional Database scripts exposed via API, these can be masked and ran via npm scripts for production level code however provide an additional way to interact with the server without the need to redeploy.

| REST Function | Endpoint   | Description             |
| ------------- | ---------- | ----------------------- |
| POST          | /create    | Create Table            |
| POST          | /init      | Initialize Model Data   |
| DELETE        | /drop      | Drop Table              |
| DELETE        | /empty     | Deletes all users       |

See the readme in the tests/ folder for more on Testing.

Updated for v1.2 of Sample-Backend.

## Resources <a name = "resources"></a>
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Express](https://expressjs.com/) - Node Backend Framework
- [NodeJs](https://nodejs.org/en/) - Server Framework
- [Pg-Promise](https://github.com/vitaly-t/pg-promise) - Database Middleware
- [Heroku](https://heroku.com/) - Live Cloud Platform (Optional)
- [Newman](https://github.com/postmanlabs/newman) - CLI for Postman Test Coverage
- [Typescript](https://www.typescriptlang.org/) - Static Type Definitions
- [DotEnv](https://github.com/motdotla/dotenv) - Secrets/Env. Variable Solution
- [Passport](http://www.passportjs.org/) - Authentication Strategy and Solution

## Acknowledgements <a name = "acknowledgement"></a>
Special Thanks
- [@tj](https://github.com/tj) and [@dougwilson](https://github.com/dougwilson) - Original author and current maintainer of Express
- [@petkaantonov](https://github.com/petkaantonov) - Bluebird
- [@motdotla](https://github.com/motdotla) - DotEnv
- [@vitaly-t](https://github.com/vitaly-t) - Pg-Promise and Pg-Monitor
- [@jaredhanson](https://github.com/jaredhanson) - Passport
- [@postmanlabs](https://github.com/postmanlabs) - Newman
