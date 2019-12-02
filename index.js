const express = require('express');

import incoming from './routes/incoming'


// TWILIO SETTINGS
const messagingResponse = require('twilio').twiml.MessagingResponse;

// APP
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// ROUTES
app.post('/incoming', incoming(req, res, messagingResponse));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 1337, () => {
    console.log('Express server listening on port 1337');
});