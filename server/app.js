'use strict';
// if js files merged, put this into a function to not pollute global scope
import express from 'express';
import http from 'http';
import SessionHandler from './session/sessionHandler';
import {
  Server as WebSocketServer
} from 'ws';

const port = process.env.PORT || 3000;
let server = http.createServer(express());

new WebSocketServer({
  server
}).on('connection', (ws) => {
  SessionHandler.handleClientConnection(ws);
});

server.listen(port, () => {
  console.info('server listening on port:', server.address().port);
});
