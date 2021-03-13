import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    /*return (
      <div className="App">
        <h1>Hello World!!!</h1>
      </div>
    );*/

    // the above code is compiled to this, in the end.
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Compiled code!'));
  }
}

export default App;
