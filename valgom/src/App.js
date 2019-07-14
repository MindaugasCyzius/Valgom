import React from 'react';
import './App.scss';
import {Button} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <p>React app</p>
      <Button success></Button>
      <input type="text"/>
      <input type="date"/>
    </div>
  );
}

export default App;
