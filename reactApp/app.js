import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ["work out", "go to bed on time", "eat food?"];

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text"></input>
        <input type="button" value="x"></input>
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <li> <Todo /> </li>
      </ul>
    );
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div></div>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div></div>
    );
  }
}


ReactDOM.render(<p>this took incredibly long!! i love wasting time!</p>,
   document.getElementById('root'));
