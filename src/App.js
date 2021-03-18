import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons : [
      {name: 'Ali', age: '32'},
      {name: 'Elham', age: '33'},
      {name: 'Mami', age: '67'}
    ],
    otherThing: 'other value'
  }

  switchNameHandler = () => {
    //Do not do this => this.state.persons[0].name= "Aliiiii";
    this.setState({
      persons : [
        {name: 'Aliiiiii', age: '32'},
        {name: 'Elham', age: '33'},
        {name: 'Mami', age: '68'}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!!!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Reading</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    // the above code is compiled to this, in the end.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Compiled code!'));
  }
}

export default App;
