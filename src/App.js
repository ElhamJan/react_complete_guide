import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!!!</h1>
        <Person name="Ali" age="32" />
        <Person name="Elham" age="33">My hobbies: Reading</Person>
        <Person name="Mami" age="67"/>
      </div>
    );

    // the above code is compiled to this, in the end.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Compiled code!'));
  }
}

export default App;
