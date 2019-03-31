import React from 'react';
import renderer from 'react-test-renderer';
import CharacterCard from '../../app/modules/characters/components/CharacterCard';

const createNodeMock = e => {
  if(e.type == 'img') {
    return {};
  }
}

it('renders correctly', () => {
  const tree = renderer
    .create(<CharacterCard name="Char name" thumbnail={{ path: "path", ext: ".jpg" }} description="A description" />, { createNodeMock })
    .toJSON();
  expect(tree).toMatchSnapshot();
});