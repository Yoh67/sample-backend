<h3 align="center">Sample-Backend</h3>

<div align="center">

  [![Version](https://img.shields.io/badge/Version-v1.1-green)]() 

</div>

---
## Table of Contents
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Resources](#resources)
- [Acknowledgments](#acknowledgement)

## Getting Started <a name = "getting_started"></a>
- Install PosgreSQL
- Clone Repository
- Create `.env` file and provide database connection string

Run your PostgreSQL instance and create your own .env file with the connection string details. See the patern illustrated in [.env.example](https://github.com/ysolomon/sample-backend/blob/master/.env.example) for more information.

Run the start script with nodemon 
```
npm start
```

Some things to note if running into issues...
- The start script does not need `nodemon`, it can be replaced it with `node`. While it's a dependency it doesn't seem to be installed via `npm i`, try this if you run into issues or install nodemon manuall via `npm i nodemon`.
- Dotenv requires a path system variable to safely load the connection secrets in the `.env` file which is intentionally masked via [.gitignore](https://github.com/ysolomon/sample-backend/blob/master/.gitignore). If you ignore this step the app will deploy without database access.

if launched successfully, open your browser to http://localhost:3000/ and you will be greeted with an example message.

## Usage <a name="usage"></a>
Using the endpoints below, you can execute basic Create, Read, Update, and Delete (CRUD) operations against the PostgreSQL instance.

| REST Function | Endpoint       | Description             |
| ------------- | -------------- | ----------------------- |
| GET           | /api/users/    | Get All Users           |
| GET           | /api/users/:id | Get a Single User       |
| POST          | /api/users/    | Create a Single User    |
| PUT           | /api/users/:id | Update an Existing User |
| DELETE        | /api/users/:id | Delete an Existing User |

Updated for v1.1 of Sample-Backend.

## Resources <a name = "resources"></a>
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Heroku](https://heroku.com/) - Cloud Platform

## Acknowledgements <a name = "acknowledgement"></a>
Special Thanks
- [@tj](https://github.com/tj) and [@dougwilson](https://github.com/dougwilson) - Original author and current maintainer of Express
- [@petkaantonov](https://github.com/petkaantonov/bluebird) - Bluebird
- [@motdotla](https://github.com/motdotla/dotenv) - Dotenv
- [@vitaly-t](https://github.com/vitaly-t/pg-promise) - Pg-Promise
