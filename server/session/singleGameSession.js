'use strict'

import {
  SessionType
} from './sessionType';

const Session = {
  type: SessionType.SINGLE_GAME
}

export function create(name) {
  let session = Object.create(Session);
  session.name = name;
  return session;
}
