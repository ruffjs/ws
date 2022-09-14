const WS = require('websocket');

const wss = new WS.WebSocketServer({ port: 8080 });

wss.on('connection', function connection (ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data.toString());
  });

  ws.send('I\'m server');
});
