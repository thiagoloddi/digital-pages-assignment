import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../../app/components/ui/Image';

const createNodeMock = e => {
  if(e.type == 'img') {
    return {};
  }
}

it('renders correctly loading', () => {
  const tree = renderer
    .create(<Image src="http://lorempixel.com/400/200/" />, { createNodeMock })
    .toJSON();
  expect(tree).toMatchSnapshot();
});