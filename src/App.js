import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      add: "",
      strike: false,
      items: [],
      completedItems: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleStrike = this.handleStrike.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id, add, items } = this.state;
    let obj = { id, todo: add }
    let todos = Object.assign({}, obj);
    const setId = id + 1;
    this.setState({
      id: setId,
      items: [...items, todos]
    });
  }

  addTodo = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleCheck = checkedItem => {
    const { items, completedItems } = this.state;
    const checkState = items.some(c => c.id === checkedItem.id);
    const checkItems = items.filter(i => i.id  !== checkedItem.id);
    const checkCompletedItems = completedItems.filter(c => c.id !== checkedItem.id);
    this.setState({
      items: checkState ? checkItems : [...items, checkedItem],
      completedItems: checkState ? [...completedItems, checkedItem] : checkCompletedItems
    });
  }

  handleStrike = event => {
    const elem = event.target;
    this.setState({
      strike: elem.classList.toggle('strike')
    });
  }

  deleteTodo = item => {
    const { items, completedItems } = this.state;
    const data = items.filter(i => i.id !== item);
    const completedData = completedItems.filter(c => c.id !== item);
    this.setState({
      items: data,
      completedItems: completedData
    });
  }

  render() {
    const { add, items, completedItems } = this.state;
    const disabled = (add === "" ? true : false);

    return (
      <div className="todos-container">
        <Header />

        <form
          onSubmit={this.handleSubmit}>
            <div>
              <input
                className="todos-input"
                autoComplete="off"
                maxLength={16}
                type="text"
                name="add"
                value={add}
                onChange={this.addTodo}
              />
              <button
                className="todos-add-btn"
                disabled={disabled}>
                  +
              </button>
            </div>
            <TodoList
              items={items}
              deleteTodo={this.deleteTodo}
              handleStrike={this.handleStrike}
              handleCheck={this.handleCheck}
            />
            <div className="line"></div>
            <p className="completed-label">Completed Tasks</p>
            <TodoList
              items={completedItems}
              deleteTodo={this.deleteTodo}
              handleStrike={this.handleStrike}
              handleCheck={this.handleCheck}
             />
        </form>

        <Footer />
      </div>
    );
  }
}

export default App;