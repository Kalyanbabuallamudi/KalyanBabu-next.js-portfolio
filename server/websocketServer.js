// server/websocketServer.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3002 });
let liveViewers = 0;

server.on('connection', ws => {
  liveViewers++;
  console.log(`New connection! Live viewers: ${liveViewers}`);

  // Broadcast live viewers count to all clients
  server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ liveViewers }));
    }
  });

  ws.on('close', () => {
    liveViewers--;
    console.log(`Connection closed! Live viewers: ${liveViewers}`);

    // Broadcast updated live viewers count
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ liveViewers }));
      }
    });
  });
});

console.log('WebSocket server is running on ws://localhost:3002');
