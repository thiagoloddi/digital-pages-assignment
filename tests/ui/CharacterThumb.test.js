import React from 'react';
import renderer from 'react-test-renderer';
import CharacterThumb from '../../app/modules/characters/components/CharacterThumb';

const createNodeMock = e => {
  if(e.type == 'img') {
    return {};
  }
};

it('renders correctly', () => {
  const tree = renderer
    .create(<CharacterThumb name="Char" src="path.jpg" />, { createNodeMock })
    .toJSON();
  expect(tree).toMatchSnapshot();
});