define([
  'jquery',
  'backbone',
  'chai',
  'lib/userinfo'
], function($, Backbone, chai, Userinfo) {
  'use strict';

  var expect = chai.expect;

  describe('Userinfo', function() {
    it('should have a name attribute by default', function() {
      expect(new Userinfo().get('name')).to.equal('');
    });
  });
});
