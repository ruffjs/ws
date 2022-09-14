var https = require('https');
var fs = require('fs');
var ws = require('websocket');

var server = https.createServer({
  cert: fs.readFileSync('/Users/young/Desktop/SSL/OWN/server.crt'),
  key: fs.readFileSync('/Users/young/Desktop/SSL/OWN/server.key')
});

var wss = new ws.WebSocketServer({ server: server });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data.toString());
  });

  ws.send('I\'m server');
});

server.listen(8080);
