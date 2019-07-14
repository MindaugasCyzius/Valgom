import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar' 
import './App.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App"></div>
      <Navbar /> 
      </BrowserRouter>
    );
  } 
}

export default App;
