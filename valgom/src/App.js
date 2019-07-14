import React, {Component} from 'react';
import './App.scss';
import {Button} from 'react-bootstrap'

class App extends Component {
  render(){
    return(
      <div className="App">
        <p>React app</p>
        <Button success></Button>
        <input type="text"/>
        <input type="date"/>
      </div>
    );
  } 
}

export default App;
