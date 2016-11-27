import React, {Component} from 'react';
import './Grid.css'

const rows = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
];
export const Grid = ({selectedColor}) => {
  return (
    <div className='grid'>
      {
        rows.map((row, index) => <Row row={row} key={index} selectedColor={selectedColor}></Row>)
      }
    </div>
  )
}

const Row = ({row, selectedColor}) => {
  return (
    <div className='grid-row' style={{width: row.length * 5 + 'em'}}>
      {
        row.map((cell, index) => <Cell cell={cell} key={index} selectedColor={selectedColor}></Cell>)
      }
    </div>
  )
}

class Cell extends Component {
  state = {color: this.props.selectedColor}

  changeColor = () => {
    this.setState({color: this.props.selectedColor})
  }

  render() {
    return (
      <div className='grid-cell' onClick={this.changeColor}
        style={this.state.color && {backgroundColor: this.state.color}}></div>
    )
  }
}
