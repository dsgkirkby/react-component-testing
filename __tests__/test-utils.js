const TestUtils = require('react-addons-test-utils');
const Login = require('../src/login');
const React = require('react');

var component;

const components = {
  usernameInput: () => TestUtils.scryRenderedDOMComponentsWithTag(component, 'input')[0],
  passwordInput: () => TestUtils.scryRenderedDOMComponentsWithTag(component, 'input')[1]
};

describe('Login', () => {
  describe('rendering', () => {
    beforeEach(() => {
      component = TestUtils.renderIntoDocument(<Login/>);
    });

    it('should render', () => {
      expect(component).toBeTruthy();
    });

    it('should render a username input', () => {
      expect(components.usernameInput()).toBeTruthy();
    });

    it('should render a password input', () => {
      expect(components.passwordInput()).toBeTruthy();
    });
  });

  describe('when values are entered', () => {
    const testUsername = 'username';
    const testPassword = 'password';
    const onSubmit = jest.fn();

    beforeEach(() => {
      onSubmit.mockClear();
      component = TestUtils.renderIntoDocument(<Login onSubmit={onSubmit}/>);

      TestUtils.Simulate.change(components.usernameInput(), {target: {value: testUsername}});
      TestUtils.Simulate.change(components.passwordInput(), {target: {value: testPassword}});
    });

    it('should update the values of the inputs', () => {
      expect(components.usernameInput().value).toEqual(testUsername);
      expect(components.passwordInput().value).toEqual(testPassword);
    });

    describe('when enter is pressed', () => {
      beforeEach(() => {
        TestUtils.Simulate.keyDown(components.passwordInput(), {keyCode: 13});
      });

      it('should call its onSubmit prop', () => {
        expect(onSubmit).toBeCalledWith(testUsername, testPassword);
      });
    });
  });
});