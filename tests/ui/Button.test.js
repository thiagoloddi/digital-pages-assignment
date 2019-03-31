import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../app/components/ui/Button';

const func = () => {};

it('renders correctly', () => {
  const tree = renderer
    .create(<Button label="some label" onClick={func} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});