import React from 'react';
import renderer from 'react-test-renderer';
import MovieItem from './MovieItem';

test('renders correctly', () => {
  const tree = renderer.create(<MovieItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
