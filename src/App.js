import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


class App extends Component {
  constructor(){
    super();
    this.state = {
      test: "testing"
    }
  }

  render(){
    return (
      <div>
        <Input placeholder="Input text here"></Input>
        <Button variant="contained">
          Hello World
        </Button>
      </div>
    )
  }



}

export default App;
