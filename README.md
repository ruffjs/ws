# websocket: a Node.js WebSocket library

### Ported to Ruff

some works includes:

1. convert ES6 to ES5 (use core-js submodule)
2. disable compression (reason: no zlib for Ruff)
3. change URL usage and handle search/hash (reason: only support parse method for Ruff url)
4. add randomBytes/randomFillSync methods (reason: no these methods for Ruff crypto)

### How to use

- installation

```bash
> rap install websocket
> rap install core-js
```

- client

```js
var WS = require('websocket');

//var ws = new WS.WebSocket('wss://127.0.0.1:8080/path', {
var ws = new WS.WebSocket('ws://127.0.0.1:8080/path', {
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
```

- server

```js
var WS = require('websocket');

var wss = new WS.WebSocketServer({ port: 8080 });

wss.on('connection', function connection (ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data.toString());
  });

  ws.send('I\'m server');
});
```

- server (secure)

```js
var https = require('https');
var fs = require('fs');
var ws = require('websocket');

var server = https.createServer({
  cert: fs.readFileSync('xxx/server.crt'),
  key: fs.readFileSync('xxx/server.key')
});

var wss = new ws.WebSocketServer({ server: server });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data.toString());
  });

  ws.send('I\'m server');
});

server.listen(8080);
```

### About name

cannot use **ws** since it has been occupied but it does not work :(

> for more: please refert to [npm:ws](https://www.npmjs.com/package/ws)
