import renderer from 'react-test-renderer';
import Login from '../src/login';
import React from 'react';

test('Form with no errors', () => {
  const tree = renderer.create(<Login/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Form with errors', () => {
  const tree = renderer.create(<Login error={'test error'}/>).toJSON();
  expect(tree).toMatchSnapshot();
});