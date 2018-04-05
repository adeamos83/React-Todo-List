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
      <div className="ui raised card" style={{marginTop: "50px", width: "400px"}}>
          <div className="content">
            <div className="header center aligned">
              <h2>Todo-List App</h2>
            </div>
          </div>
          <div className="content" style={{padding: "14px 0"}}>
            <div className="center aligned" style={{paddingBottom: "50px", position: "relative", top: "40px"}}>
              <form className="ui form" onSubmit={this.handleSubmit}>
                  <div className="field" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                    <input
                      type="text"
                      name="newTodo"
                      value={newTodo}
                      onChange={(e) => 
                        this.setState({[e.target.name]: e.target.value})
                      }
                    />
                  </div>
                    <button type="submit" className="save-button ui fluid bottom attached teal button" style={{top: "25px"}}>
                      <i className="add icon"></i>Add todo
                    </button>
                </form>
              </div>
            </div>
        </div>
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
