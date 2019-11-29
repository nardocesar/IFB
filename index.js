const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');


// TWILIO SETTINGS
const messagingResponse = require('twilio').twiml.MessagingResponse;

// APP
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.post('/incoming', (req, res) => {
    const twiml = new messagingResponse();
    twiml.message(`Eu sou o Danny e vou calcular sua pontuação no Ibitirama's Farfada game. Você falou *${req.body.Body}*`);
    
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 1337, () => {
    console.log('Express server listening on port 1337');
});