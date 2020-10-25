import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Hearder from "./components/layout/Header";
import About from "./components/pages/About";
import Axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [],
  };

  //request data
  componentDidMount() {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then((res) => this.setState({ todos: res.data }));
    //  .catch(console.log(Error));
  }

  //Toggle complete
  markComplete = (id) => {
    Axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) =>
        this.setState({
          todos: this.state.todos.map((todo) => {
            if (todo.id === id) {
              todo.complete = !todo.complete;
            }
            return todo;
          }),
        })
    );
  };

  //delete todo
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
    );
  };

  addTodo = (title) => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      complete: false,
    }).then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Hearder />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
