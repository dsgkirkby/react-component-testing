const enzyme = require('enzyme');
const Login = require('../src/login');
const App = require('../src/app');
const React = require('react');

var wrapper;

const components = {
  usernameInput: () => wrapper.find('input').first(),
  passwordInput: () => wrapper.find('input').last(),
  error: () => wrapper.find('.error')
};

describe('Testing With Enzyme', () => {
  describe('Shallow Rendering', () => {
    it('should handle dynamic events', () => {
      const appWrapper = enzyme.shallow(<App/>);

      console.log = jest.fn();

      appWrapper.find(Login).simulate('submit');

      expect(console.log).toBeCalledWith('test');
    });
  });

  describe('Full DOM Rendering', () => {
    describe('rendering', () => {
      beforeEach(() => {
        wrapper = enzyme.mount(<Login/>);
      });

      it('should render', () => {
        expect(wrapper).toBeTruthy();
      });

      it('should render a username input', () => {
        expect(components.usernameInput()).toBeTruthy();
      });

      it('should render a password input', () => {
        expect(components.passwordInput()).toBeTruthy();
      });

      it('should not show any errors', () => {
        expect(components.error().length).toBe(0);
      });

      describe('when there is an error', () => {
        const error = 'username or password is incorrect';

        beforeEach(() => {
          wrapper = enzyme.mount(<Login error={error}/>)
        });

        it('should show the error', () => {
          expect(components.error()).toBeTruthy();
          expect(components.error().text()).toEqual(error);
        });
      });
    });

    describe('when values are entered', () => {
      const testUsername = 'username';
      const testPassword = 'password';
      const onSubmit = jest.fn();

      beforeEach(() => {
        onSubmit.mockClear();
        wrapper = enzyme.mount(<Login onSubmit={onSubmit}/>);

        components.usernameInput().simulate('change', {target: {value: testUsername}});
        components.passwordInput().simulate('change', {target: {value: testPassword}});
      });

      it('should update the values of the inputs', () => {
        expect(components.usernameInput().props().value).toEqual(testUsername);
        expect(components.passwordInput().props().value).toEqual(testPassword);
      });

      describe('when enter is pressed', () => {
        beforeEach(() => {
          components.passwordInput().simulate('keyDown', {keyCode: 13});
        });

        it('should call its onSubmit prop', () => {
          expect(onSubmit).toBeCalledWith(testUsername, testPassword);
        });
      });
    });
  });

  describe('Static HTML Rendering', () => {
    beforeEach(() => {
      wrapper = enzyme.render(<Login/>);
    });

    it('should render', () => {
      expect(wrapper).toBeTruthy();
    });

    it('should render a username input', () => {
      expect(components.usernameInput()).toBeTruthy();
    });

    it('should render a password input', () => {
      expect(components.passwordInput()).toBeTruthy();
    });

    it('should not show any errors', () => {
      expect(components.error().length).toBe(0);
    });

    describe('when there is an error', () => {
      const error = 'username or password is incorrect';

      beforeEach(() => {
        wrapper = enzyme.mount(<Login error={error}/>)
      });

      it('should show the error', () => {
        expect(components.error()).toBeTruthy();
        expect(components.error().text()).toEqual(error);
      });
    });
  });
});