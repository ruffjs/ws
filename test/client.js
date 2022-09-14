var WS = require('websocket');

//const ws = new WS.WebSocket('ws://127.0.0.1:8080/path', {
var ws = new WS.WebSocket('wss://127.0.0.1:8080/path', {
    rejectUnauthorized: false
});

ws.on('close', function err (err) {
    console.log('close');
});

ws.on('open', function open() {
  ws.send('I\'m client');
});

ws.on('message', function message (data) {
  console.log('received: %s', data.toString());
});
