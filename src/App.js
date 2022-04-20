import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import axios from 'axios';
let url = 'http://localhost:8080/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: "",
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

  handleSubmit = async e => {
    e.preventDefault();

    const { id, text, items } = this.state;
    //an object todo with an id and a todo added
    //give each todo a unique id
    let todo = { id, text }
    const setId = id + 1;
    this.setState({
      id: setId,
      items: [...items, todo]
    });

    const headers = {
      header: {
        "Content-type": "application/json"
      }
    }

    try {
      const { data } = await axios.post(url, todo, headers);
      //get the new todo
      items.push(data);
      this.setState({
        items
      })
    } catch (err) {
      console.log(err);
    }
  }

  //get the name and value of the todo
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

  deleteTodo = async item => {
    const { id, items, completedItems } = this.state;
    const data = items.filter(i => i.id !== item);
    const completedData = completedItems.filter(c => c.id !== item);
    this.setState({
      items: data,
      completedItems: completedData
    });

    //get the id to delete a todo
    const ids = items.map(i => i._id);
    for (let i=0; i < ids.length; i++) {
      let _id = ids[i];
      await axios.delete(url+_id);
    }
  }

  render() {
    const { text, items, completedItems } = this.state;
    const disabled = (text === "" ? true : false);

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
                name="text"
                value={text}
                onChange={this.addTodo}
              />
              <button
                className="todos-add-btn"
                tabIndex="0"
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
            <p
              className="completed-label"
              tabIndex="0">
                Completed Tasks
            </p>
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