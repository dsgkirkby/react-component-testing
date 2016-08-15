import React from 'react';
import Login from './login';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('test');
  }

  render() {
    return (
      <div>
        <Login onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

module.exports = App;