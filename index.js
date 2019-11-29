const express = require('express');


// TWILIO SETTINGS
const twilioSID = 'ACc62dea67502080501c0b261bff13768f', twilioToken = '2a05e24a01657898625b3c64f524a27f';
const twilioClient = require('twilio')(twilioSID, twilioToken);
const messagingResponse = require('twilio').twiml.MessagingResponse;

// APP
const app = express();

app.post('/incoming', (req, res) => {
    const twiml = new messagingResponse();
    twiml.message(`Eu sou o Danny e vou calcular sua pontuação no Ibitirama's Farfada game.`);
    res.end(twiml.toString());
});