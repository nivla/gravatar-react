import React, { Component } from 'react';
import {render} from 'react-dom';
import Gravatar from '../dist/'

class App extends Component {
  render() {
    return(
      <div >
        <Gravatar
          email="dickson.alvin@gmail.com"
          size="150"
          alt="Alvin Dickson"
        />
      </div>
    );
  }
}

let mount = document.getElementById('app')
render(<App/>, mount)
