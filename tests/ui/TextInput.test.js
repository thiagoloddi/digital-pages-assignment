import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from '../../app/components/ui/TextInput';

const func = () => {};

it('renders correctly without error', () => {
  const tree = renderer
    .create(<TextInput label="some label" value="some value" id="123" onChange={func} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders correctly with error', () => {
  const tree = renderer
    .create(<TextInput label="some label" value="some value" error="some error" id="123" onChange={func} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});