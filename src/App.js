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
      <div className="item" key={index} style={{paddingTop: "10px", paddingBottom: "10px", alignItems: "center", display: "flex"}}>
        <div className="ui left floated compact segment">
          <div className="ui fitted checkbox">
            <input type="checkbox"/>
            <label></label>
          </div>
        </div>
        <h3 className="ui header content">{t}</h3>
      </div>
    ));
    
    return (
      <div className="App">
      <div className="ui segment" style={{marginTop: "50px", width: "400px"}}>
            <div>
              <h2 className="ui center aligned header">Todo-List App</h2>
              <h5 className="ui center aligned grey header">Simple React To-Do App</h5>
            </div>
            <div className="center aligned" style={{paddingTop: "50px"}}>
              <form className="ui form" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="ui action input">
                      <input
                        type="text"
                        name="newTodo"
                        value={newTodo}
                        
                        onChange={(e) => 
                          this.setState({[e.target.name]: e.target.value})
                        }
                      />
                      <button type="submit" className="save-button ui circular icon teal button" style={{top: "25px"}}>
                        <i className="add icon"></i>
                      </button>
                    </div>
                  </div>
                    
                </form>
              </div>
              <div className="ui divided list">
                  {todos}
              </div>
        </div>
      </div>
    );
  }
}

export default App;
