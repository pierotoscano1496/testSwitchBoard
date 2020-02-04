var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8080, path: '/consumo' }); // If you want to add a path as well, use path: "PathName"

const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});

app.get('/consulta', (req, res) => {
    res.json({ mensaje: 'Mensaje' });
});

app.get('/consulta/:nombre', (req, res) => {
    res.send(req.params.nombre + ', tienes un mensaje');
});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
    });

    ws.send('Mensaje de prueba');
});