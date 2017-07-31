var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 3000 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
        ws.send("来自地球的回复");
    });
});
