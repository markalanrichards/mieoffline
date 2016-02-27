var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoConfig = require('../../instance-config.json').mongo;
var url = 'mongodb://' + mongoConfig.address + '/myproject';
var today = new Date()
var posts = [{
  timestamp: today.toISOString(),
  message: 'pizza',
},]
var insertPosts = function(db, callback) {
  var collection = db.collection('documents');
  collection.insertMany(posts, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
    console.log('Inserted 1 documents into the document collection');
    callback(result);
  });
}

var readPosts = function(db, callback) {
  var collection = db.collection('documents');
  var fifteenMinutesAgo = new Date(today.getTime() - 900000).toISOString()
  console.log(fifteenMinutesAgo)
  collection.find({timestamp: {$gt: fifteenMinutesAgo}}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    collection.ensureIndex({timestamp: 1},{},function(err,result) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });

  });
}
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected correctly to server');
  insertPosts(db, function(result) {
    console.log(result);
    readPosts(db, function(result) {
      console.log(result)
      db.close()
    });
  });

});
