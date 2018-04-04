import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      newTodo: " "
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: " "});
   }
    
   
  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((t, index) => (
      <li key={index}>
        {t}
      </li>
    ));
    
    return (
      <div className="App">
        <h2>Todo-List App</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="newTodo"
            value={newTodo}
            className="todo-input"
            onChange={(e) => 
              this.setState({[e.target.name]: e.target.value})
            }
          />
          <button type="submit" className="save-button">
          Submit
          </button>
        </form>
        <div className="todo-content">
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
