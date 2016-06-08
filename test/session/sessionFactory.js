'use strict'

import sinon from 'sinon';
import {
  expect
} from 'chai';
import * as SessionFactory from '../../server/session/sessionFactory';
import * as SingleGameSession from '../../server/session/singleGameSession';
import {
  SessionType
} from '../../server/session/sessionType';

describe('sessionFactory', () => {
  describe('create', () => {

    let createStub, session;

    beforeEach(() => {
      session = {};
      createStub = sinon.stub(SingleGameSession, 'create');
      createStub.returns(session);
    });

    afterEach(() => {
      createStub.restore();
    })

    it('should create a new single game session', () => {
      let value = SessionFactory.create('name', SessionType.SINGLE_GAME);
      expect(value).to.equal(session);
    });

    it('should create a new single game session', () => {
      let value = SessionFactory.create('name');
      expect(value).to.equal(session);
    });
  });
});
