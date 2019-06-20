import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';

import Results from './src/Results';
import Details from './src/Details';

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <header>Adopt Me!</header>
        </Link>

        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
