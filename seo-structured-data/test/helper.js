'use strict';

var moment = require('moment'),
  _ = require('lodash'),
  Promise = require('bluebird'),
  chai = require('chai'),
  assert = chai.assert,
  helper = require('../lib/helper');

describe('SEO Structured Data Helper', function () {
  it('should generate website and organization structured data', function () {
    var checkAssertions = function (result) {
      //assert.isUndefined(result);
      assert.isString(result);
      //assert.isTrue(moment(result.lastModification).isSame(moment.utc([2015, 0, 2, 14])));
      //assert.isArray(result.data.items);
      //assert.lengthOf(result.data.items, 1);
      //assert.isTrue(_.some(result.data.items, {name: 'Tag1'}));
    };

    var config = {
      'title': 'Fake title',
      'url': 'http://www.fakeurl.com',
      'seo_structured_data': {
        'organization': {
          'name': 'Fake organization',
          'url': 'http://www.organizationfakeurl.com',
          'logoUrl': 'http://www.organizationfakeurl.com/logo.png'
        }
      }
    };

    checkAssertions(helper(config));
  });
});
