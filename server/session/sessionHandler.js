'use strict'

import * as SessionFactory from './sessionFactory';

const SessionHandler = {
  sessions: [],

  handleClientConnection(webServer) {
    this.sessions.push(createSession());
  }
}

function createSession(name = 'default') {
  return SessionFactory.create();
}

export default SessionHandler;
