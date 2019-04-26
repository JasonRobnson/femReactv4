import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me</h1>
        <Pet name="Lunda" animal="Dog" breed="Whoknows" />
        <Pet name="Sam" animal="Log" breed="Whoknows" />
        <Pet name="Tham" animal="Fog" breed="Whoknows" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
