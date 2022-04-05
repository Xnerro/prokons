import React, { Component} from 'react';
import './App.css';
import Content from './component/content';
import NavComponent from './component/nav';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <NavComponent />
        <Content />
      </div>
    );
  }
}
 
export default App;