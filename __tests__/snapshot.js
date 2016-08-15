const renderer = require('react-test-renderer');
// const TestUtils = require('react-addons-test-utils');
const Login = require('../src/login');
const React = require('react');

describe('Snapshot Testing', () => {
  it('renders correctly when there are no errors', () => {
    const tree = renderer.create(<Login/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('updates the input values when changed', () => {
    const tree = renderer.create(<Login/>);

    // Change the input values - waiting on selector API for test renderer as mentioned in https://github.com/facebook/jest/issues/1411

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly when there are errors', () => {
    const tree = renderer.create(<Login error={'test error'}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
