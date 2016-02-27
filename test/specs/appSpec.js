
import router from '../../src/js/router.js';
var assert = require('assert');
describe('Test index.html content', function() {
  describe('#indexOf()', function() {
    var helloWorld = 'Hello, Root!';
    it('should containt ' + helloWorld, function() {
      var innerHTML = document.querySelector('#main').innerHTML;
      var a = innerHTML.indexOf(helloWorld);
      assert.notEqual(a,-1, 'The index of \'' + helloWorld + '\'  is -1 so not found in ' + innerHTML);
    });
  });
});
