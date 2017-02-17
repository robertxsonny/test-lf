import React from 'react';

class AddBlock extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.click();
  }

  render() {
    return <button onClick={() => {this.handleClick()}}>{this.props.text}</button>;
  }
}

export default AddBlock
