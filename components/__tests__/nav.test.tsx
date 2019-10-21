import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../nav';

describe('Nav Test', () => {
  test('Nav render', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
