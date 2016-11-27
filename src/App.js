import React, { Component } from 'react';
import {Grid} from './Grid/Grid.js';
import {ColorChooser} from './ColorChooser/ColorChooser.js'

class App extends Component {

  state = {selectedColor: null}

  changeSelectedColor = (color) => {
    this.setState({selectedColor: color})
  }

  render() {
    return (
      <div>
        <Grid selectedColor={this.state.selectedColor}></Grid>
        <ColorChooser setSelectedColor={this.changeSelectedColor}></ColorChooser>
      </div>
    );
  }
}

export default App;
