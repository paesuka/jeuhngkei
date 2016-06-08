'use strict'

import sinon from 'sinon';
import {
  expect
} from 'chai';
import * as SingleGameSession from '../../server/session/singleGameSession';
import {
  SessionType
} from '../../server/session/sessionType';

describe('singleGameSession', () => {
  describe('create', () => {

    let name = 'name';
    
    it('should create a single game session object', () => {
      let session = SingleGameSession.create(name);
      expect(session.type).to.equal(SessionType.SINGLE_GAME);
      expect(session.name).to.equal(name);
    });
  });
});
