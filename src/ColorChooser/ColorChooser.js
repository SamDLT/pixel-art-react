import React, {Component} from 'react';
import './ColorChooser.css';

const colors = ['red', 'green', 'blue'];

export class ColorChooser  extends Component {
  state = {selectedColor: 'pink'}

  changeSelectedColor = (color) => this.props.setSelectedColor(color);

  render() {
    return (
      <div className='color-chooser-container'>
        {
          colors.map((color, index) =>
            <ColorButton key={index} color={color} changeSelectedColor={this.changeSelectedColor}/>)
        }
      </div>
    )
  }
}

const ColorButton = ({color, changeSelectedColor}) => {
  const dispatchChangeSelectedColor = () => changeSelectedColor(color);
  return (
    <input type='button' value={color} onClick={dispatchChangeSelectedColor}/>
  )
}
