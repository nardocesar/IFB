const bodyParser = require('body-parser');

const incoming = (req, res, messagingResponse) => {
    
    console.log(JSON.stringify(req.body));
    const twiml = new messagingResponse();
    twiml.message(`Eu sou o Danny e vou calcular sua pontuação no Ibitirama's Farfada game. Você falou *${req.body.Body}*`);

    res.writeHead(200, {
        'Content-Type': 'text/xml'
    });
    res.end(twiml.toString());
};

export default incoming;