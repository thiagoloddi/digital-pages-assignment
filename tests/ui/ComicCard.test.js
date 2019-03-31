import React from 'react';
import renderer from 'react-test-renderer';
import ComicCard from '../../app/modules/characters/components/ComicCard';

const createNodeMock = e => {
  if(e.type == 'img') {
    return {};
  }
};

it('renders correctly', () => {
  const tree = renderer
    .create(<ComicCard title="A Title" issueNumber="1" thumbnail={{ path: "path", extensions: ";jpg" }} description="A description" />, { createNodeMock })
    .toJSON();
  expect(tree).toMatchSnapshot();
});