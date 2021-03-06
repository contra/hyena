var Query = require('../lib/query');
var seed = require('./fixtures/seed');
var db = seed.db;
var assert = require('assert');
require('mocha');

var expectedSQL = "SELECT `__users__`.`id` AS __users___id, `__users__`.`name` AS __users___name FROM `users` AS `__users__` WHERE `__users__`.`amount` BETWEEN ? AND ?";
var expectedValues= [0,10];

describe('Select Query', function () {
  describe('between', function () {

    it('should generate the proper SQL', function () {
      var query = new Query(db.model('User'), { useAlias: true });
      query
        .select('name')
        .where('amount')
        .between(0, 10);
      assert.equal(expectedSQL, query.toString());
      assert.deepEqual(expectedValues, query.values());
    });

  });
});


