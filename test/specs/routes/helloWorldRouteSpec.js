import React from 'react';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import HelloWorldRoute from '../../../src/js/routes/portfolioGalleryRoute';

it('renders an h1', function() {
  var component = TestUtils.renderIntoDocument(
    <HelloWorldRoute />
  );
  var h1 = TestUtils.findRenderedDOMComponentWithTag(
     component, 'h1'
  );
  expect(findDOMNode(h1).textContent)
      .toEqual('Hello, World!');
});
