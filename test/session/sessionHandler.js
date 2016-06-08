'use strict'

import sinon from 'sinon';
import {
  expect
} from 'chai';
import sessionHandler from '../../server/session/sessionHandler';
import * as SessionFactory from '../../server/session/sessionFactory';
// import {create} from '../../server/session/sessionFactory';

describe('sessionHandler', () => {
  describe('handleClientConnection', () => {

    let webServer, createSpy;

    beforeEach(() => {
      createSpy = sinon.spy(SessionFactory, 'create');
      // create = sinon.spy(create);
      webServer = {};
    });

    afterEach(() => {
      createSpy.restore();
      // create.restoer();
    });

    it('should create a new session', () => {
      sessionHandler.handleClientConnection(webServer);
      expect(createSpy.calledOnce).to.equal(true);
    });
  });
});
