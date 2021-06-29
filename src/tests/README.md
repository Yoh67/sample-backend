<h3 align="center">Testing</h3>

## Getting Started <a name = "getting_started"></a>
The curernt implementation of tests is very basic and not as robust as would be expected, this is due to time constraints and project scope, however it is possible to test the application via the Postman CLI tool Newman. 

You will need to first launch the app using..
```
npm start
```
.. then in a separate instance, navigate to the repository and run..
```
npm run test
```

The postman collection files in this folder have been added to the .gitignore since they contain secrets used for basic authorization on all requests. 

Simply match the Basic Authorization credentials to the ones defined in your .env file to get around this. 

In order for the tests to run successfully you should export your collection of tests from postman into this folder (or another if you edit the test script).
