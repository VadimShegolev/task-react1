import React, { Component, useState } from "react";
import './App.css';

function SubButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h6>{count} times</h6>
      <button id="Submit"
              onClick={() => setCount(count + 1)}
              className="Buttn">
        Submit new element
      </button>
    </div>
  );
}

function DelButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h6>{count} times</h6>
      <button id="Delete"
              onClick={() => setCount(count + 1)}
              className="Buttn">
        Delete last element
      </button>
    </div>
  );
}


export default class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <h3>List of elements</h3>

        <form onSubmit={this.handleSubmit}>
          <lable htmlFor="elem">Enter new element </lable>
          <input
            placeholder="Example: TUTUTU"
            className="Text-box"
            id="elem"
            onChange={this.handleChange}
            value={this.state.text}
            />
          <SubButton />
          <DelButton />
        </form>
        <FooList items={this.state.items} />
      </div>

    )
  }


  handleChange(e){
    this.setState({ text: e.target.value });
  }
  handleSubmit(e){
    var btn = document.getElementById("Submit");
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));

  }
}


class FooList extends Component {
  render() {
    return (
      <ul>{this.props.items.length} elements
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
