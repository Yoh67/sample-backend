<h3 align="center">Testing</h3>

## Getting Started <a name = "getting_started"></a>
The curernt implementation of tests is very basic and not as robust as would be expected, this is due to time constraints however it is possible to test the application. 

You will need to first launch the app using..
```
npm start
```
.. then in a separate cmd line instance, navigate back to the repository and run..
```
npm run test
```

This should be able to be called sequentially by altering the test script in the package.json to start and concatenate the test script with && to look like..
```
npm start&& newman run src/tests/sample-backend-tests.postman_collection.json -e src/tests/local.postman_environment.json
```
.. This however does not work and once again in the interest of scope creep and haste for v1.2 I decided the above method to be best.

I've .gitignored the collection.json files in this folder since they contain secrets used for basic authorization on all requests. Simply match the Basic Authorization credentials to the ones defined in your .env file to get around this. In order for the tests to succeed you should export your collection of tests within postman into this folder (or another if you edit the test script) in order to run the tests.