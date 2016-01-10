import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
  render() {
    return(
      <div>Hello</div>
    )
  }
}

let mount = document.getElementById('app')
render(<App/>, mount)
