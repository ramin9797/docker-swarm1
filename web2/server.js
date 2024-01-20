const os = require('os');
const express = require('express');
const app = express();
const redis = require('redis');

app.get('/', function(req, res) {
        console.log("hello server2.js");
       res.send("Test");
});

app.listen(4000, function() {
    console.log('Web application is listening on port 4000');
});
