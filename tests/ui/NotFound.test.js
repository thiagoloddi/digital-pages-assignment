import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../../app/components/ui/NotFound';

it('renders correctly', () => {
  const tree = renderer
    .create(<NotFound show={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});