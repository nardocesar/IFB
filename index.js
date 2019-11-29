const https = require('https');
const express = require('express');


// TWILIO SETTINGS
const messagingResponse = require('twilio').twiml.MessagingResponse;

// APP
const app = express();

app.post('/incoming', (req, res) => {
    const twiml = new messagingResponse();
    twiml.message(`Eu sou o Danny e vou calcular sua pontuação no Ibitirama's Farfada game.`);
    
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 1337, () => {
    console.log('Express server listening on port 1337');
});