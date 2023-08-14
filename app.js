const express = require("express");
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });


wss.on('connection', (ws) => {
    console.log('WebSocket connection established');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);

        // Simulate a basic chatbot response
        const response = `You said: ${message}`;
        ws.send(response);
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
});


const PORT = process.env.PORT || 3001;


server.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});


