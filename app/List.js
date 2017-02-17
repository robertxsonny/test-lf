import React from 'react';
import Block from './Block';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let lists = this.props.letters.map((l, i) => (<Block key={i} letter={l.letter} color={l.color}></Block>) );
    return <div>{lists}</div>;
  }
}

export default List
