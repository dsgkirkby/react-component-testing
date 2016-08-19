import Login from './login';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(<Login
  error="Error"
  onSubmit={(username, password) => alert(`Username: ${username}, Password: ${password}`)}
/>, document.getElementById('root'));