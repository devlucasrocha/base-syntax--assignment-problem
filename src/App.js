import React, { Component } from 'react';
import './App.css';
import Instructions from './Instructions'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    username: "Muriel",
    len: 0
  }

  changer = (event) => {
    this.setState({
      username: event.target.value,
      len: event.target.value.length
    })
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'text',
      borderRadius: '10px',
      fontSize: '20px',
      color: 'black'
    }

    return (
      <div className="App">
        <Instructions />
        <UserInput changed={this.changer} currentName={this.state.username} styleInline={style}/>

        <UserOutput username={this.state.username} len={this.state.len}/>

        <UserOutput username={this.state.username} len={this.state.len}/>

        <UserOutput len={"This is really working"}>Juarez</UserOutput>
      </div>
    );
  }
}

export default App;
