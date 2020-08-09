<h3 align="center">Sample-Backend</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/Status-Sucess-brightgreen)]() 

</div>

---

<p align="center"> Teaching an old dog new tricks!
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
Wanted to learn more about microservices and modern tech stacks. Some topics include..
- Developing a backend application using MVC
- Developing a "REST"-ful live service
- Deploying a live service using CICD dev processes
- Some SQL and Database experience
- Languages and Frameworks (Node.js, Expressv4, etc)

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites and Installing
Fetch all necessary project dependencies
```
npm install
```

Then start the app

```
npm start
```

Once launched successfully, you'll be met with a Hello World message at http://localhost:3000/


## 🎈 Usage <a name="usage"></a>
Using the RESTful API endpoints below, it is possible to execute basic Create, Read, Update, and Delete (CRUD) operations against the PostgreSQL database.

| REST Function | Endpoint       | Description             |
| ------------- | -------------- | ----------------------- |
| GET           | /api/users/    | Get All Users           |
| GET           | /api/users/:id | Get a Single User       |
| POST          | /api/users/    | Create a Single User    |
| PUT           | /api/users/:id | Update an Existing User |
| DELETE        | /api/users/:id | Delete an Existing User |

Updated for v1.0 of Sample-Backend.

## 🚀 Deployment <a name = "deployment"></a>
This app will be deployed on every successful commit via Heroku, this pipeline is not a "true" CICD workflow in the sense that there are not integration testing in the "develop" environment at this stage.

## ⛏️ Built Using <a name = "built_using"></a>
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Heroku](https://heroku.com/) - Cloud Platform

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
"Tip of the hat" to all folks who's repositories are probably used on a consistent basis to create the foundation of most humble backend projects like this, these folks don't get enough thanks!
- [@kylelobo](https://github.com/kylelobo) - Readme template source, highly encourage any who are looking to refer to his repo [here](https://github.com/kylelobo/The-Documentation-Compendium)
- [@tj](https://github.com/tj) and [@dougwilson](https://github.com/dougwilson) - Original author and current maintainer of Express
- [@petkaantonov](https://github.com/petkaantonov/bluebird) - Bluebird
- [@voxpelli](https://github.com/voxpelli/node-connect-pg-simple) - Connect-pg-simple
- [@motdotla](https://github.com/motdotla/dotenv) - Dotenv
- [@vitaly-t](https://github.com/vitaly-t/pg-promise) - Pg-promise
