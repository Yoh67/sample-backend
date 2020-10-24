import newman from 'newman'; // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
        collection: require('./sample-backend-tests.postman_collection.json'),
        reporters: 'cli'
    },
    (error: any) => {
    if (error) { throw error; }
    console.log('Collection Run Complete!');
});