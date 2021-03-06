import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    const onKeyDown = (event) => {
      if (event.keyCode === 13) {
        this.props.onSubmit(this.state.username, this.state.password);
      }
    };

    return <div>
      <div>
        <label>Username:</label>
        <input
          value={this.state.username}
          onChange={(event) => this.setState({username: event.target.value})}
          onKeyDown={onKeyDown}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          value={this.state.password}
          onChange={(event) => this.setState({password: event.target.value})}
          onKeyDown={onKeyDown}
          type="password"
        />
      </div>
      {'error' in this.props &&
      <p className="error">{this.props.error}</p>
      }
    </div>
  }
}

Login.propTypes = {
  onSubmit: React.PropTypes.func,
  error: React.PropTypes.node
};

module.exports = Login;