'use strict'

import sinon from 'sinon';
import {
  expect
} from 'chai';
import SessionHandler from '../../server/session/sessionHandler';
import * as SessionFactory from '../../server/session/sessionFactory';

describe('sessionHandler', () => {
  describe('handleClientConnection', () => {

    let webServer, createSpy;

    beforeEach(() => {
      createSpy = sinon.spy(SessionFactory, 'create');
      webServer = {};
    });

    afterEach(() => {
      createSpy.restore();
    });

    it('should create a new session', () => {
      SessionHandler.handleClientConnection(webServer);
      expect(createSpy.calledOnce).to.equal(true);
    });
  });
});
