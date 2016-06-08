'use strict';

import {
  SessionType
} from './sessionType';
import * as SingleGameSession from './singleGameSession';

export function create(name, sessionType = SessionType.SINGLE_GAME) {
  switch (sessionType) {
    case SessionType.SINGLE_GAME:
      return SingleGameSession.create(name);
  }
}
