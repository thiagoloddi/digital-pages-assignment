import React from 'react';
import renderer from 'react-test-renderer';
import CharactersList from '../../app/modules/characters/components/CharactersList';

const createNodeMock = e => {
  if(e.type == 'img') {
    return {};
  }
}

const func = () => {};

const characters = [
  { id: "1", name: "Char1", description: "Description 1", modified: 1, thumbnail: { path: "path", extension: ".jpg" }},
  { id: "2", name: "Char1", description: "Description 2", modified: 2, thumbnail: { path: "path", extension: ".jpg" }}
];

it('renders correctly', () => {
  const tree = renderer
    .create(<CharactersList characters={characters} onRowClick={func} />, { createNodeMock })
    .toJSON();
  expect(tree).toMatchSnapshot();
});