import React, { Component } from "react";
import './App.css';
import FuncList from './FuncList';
import { loremIpsum } from "lorem-ipsum";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [{id:"0", text:""}], 
      //text: '',
      addCount: 0,
      delCount: 0 
    };
  }

  addElem= () =>{
    let items = [...this.state.items];
    items.push({text: loremIpsum()});
    this.setState({
      items,
      addCount: this.state.addCount + 1,
      id: Date.now
    })
  }
 
  delElem= () =>{
    this.state.items.pop();
    this.setState({delCount: this.state.delCount + 1});
  }

  render() {
    return (
      <div>
        <h2>List of elements</h2>

        <form>
          <lable htmlFor="elem">Enter new element </lable>
          
          <table>
          <tr>
            <td><h3 style={{margin: 2}}>{this.state.addCount}</h3></td>
            <td><h3 style={{margin: 2}}>{this.state.delCount}</h3></td>
          </tr>
          <tr>
            <td><input className="Buttn" type="button" value="Submit" onClick={this.addElem}></input></td>
            <td><input className="Buttn" type="button" value="Delete" onClick={this.delElem}></input></td>
          </tr>
          </table>
          
        </form>
        <FuncList items={this.state.items} />

      </div>
    )
  }

}