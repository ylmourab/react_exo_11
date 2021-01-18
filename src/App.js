

import React, { Component } from 'react'
import './App.css'

export class App extends Component {
  state = {
    number : 0,
    color: 0,
  }


  add = () =>{
    this.setState({
      number : this.state.number + 1,
    })
  }

  soustract = () =>{
    this.setState({
      number : this.state.number - 1,
    })
  }
  changeColor = () =>{
    this.setState({
      color : !this.state.color
      
    })
    console.log(`la couleur est ${this.state.color}`)

  }


  render() {

   
    return (
      <div>
        <h1 className = { this.state.color ? "blue":  ""}>{this.state.number}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.soustract}>soustract</button>
        <button onClick={this.changeColor}>Changer la couleur</button>
        
      </div>
    )
  }
}

export default App

