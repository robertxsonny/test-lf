import React from 'react';

class Block extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var blockStyle = {
      display: 'inline-block',
      backgroundColor: this.props.color,
      color: 'white',
      textAlign: 'center',
      width: '10%'
    };

    return <div key={this.props.key} style={blockStyle}><h2>{this.props.letter}</h2></div>;
  }
}

export default Block
