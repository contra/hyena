var Query = require('../lib/query');
var assert = require('assert');
var seed = require('./fixtures/seed');
var db = seed.db;
require('mocha');

var expectedSQL = "SELECT `users`.`id` AS users_id, `users`.`name` AS users_name FROM `users` WHERE `users`.`amount` > ? AND `users`.`amount` < ?";
var expectedValues= [100,1000];

describe('Select Query', function () {
  describe('greater than', function () {

    it('should generate the proper SQL', function () {
      var query = new Query(db.model('User'));
      query
        .select('name')
        .where('amount')
        .gt(100)
        .where('amount')
        .lt(1000);
      assert.equal(expectedSQL, query.toString());
      assert.deepEqual(expectedValues, query.values());
    });

  });
});
