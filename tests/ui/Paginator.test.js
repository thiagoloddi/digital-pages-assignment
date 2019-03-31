import React from 'react';
import renderer from 'react-test-renderer';
import Paginator from '../../app/modules/characters/components/Paginator';

const last = 50;


it('renders correctly first third', () => {
  const tree = renderer
    .create(<Paginator current={1} last={last} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly second third', () => {
  const tree = renderer
    .create(<Paginator current={25} last={last} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly last third', () => {
  const tree = renderer
    .create(<Paginator current={50} last={last} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});