'use strict'

import * as SessionFactory from './sessionFactory';

const SessionHandler = {
  sessions: [],

  handleClientConnection(webServer) {
    return createSession(this.sessions);
  }
}

function createSession(sessions) {
  let session = SessionFactory.create();
  sessions.push(session);
  return session;
}

export default SessionHandler;
