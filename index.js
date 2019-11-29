const express = require('express');


// TWILIO SETTINGS
const twilioSID = process.env.SID, twilioToken = process.env.TOKEN;
const twilioClient = require('twilio')(twilioSID, twilioToken);
const messagingResponse = require('twilio').twiml.MessagingResponse;

// APP
const app = express();

app.post('/incoming', (req, res) => {
    const twiml = new messagingResponse();
    twiml.message(`Eu sou o Danny e vou calcular sua pontuação no Ibitirama's Farfada game.`);
    res.end(twiml.toString());
});

app.get('/', (req, res) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => {
    console.log('BOT running.');
});