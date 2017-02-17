import React from 'react';
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
        <IndexLink activeClassName='active' to='/add/letter'>Test with letter</IndexLink>&nbsp;
        <IndexLink activeClassName='active' to='/add/number'>Test with number</IndexLink>
      </div>
    )
  }
}

export default App
