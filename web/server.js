const os = require('os');
const express = require('express');
const app = express();
const redis = require('redis');
const axios = require('axios');

app.get('/', async function(req, res) {
    try {
        // Отправка запроса к проекту B
        const response = await axios.get('http://projectb:3000');
        res.send(`Response from Project B: ${response.data}`);
      } catch (error) {
        console.error('Error contacting Project B:', error.message);
        res.status(500).send('Error contacting Project B');
      }
});

app.listen(3000, function() {
    console.log('Web application is listening on port 5000');
});
