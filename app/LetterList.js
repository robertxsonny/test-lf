import React from 'react';
import AddBlock from './AddBlock';
import List from './List';
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router';

class LetterList extends React.Component {
  constructor(props) {
    super(props);
    this.letterlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.colors = ["#966FD6", "#779ECB", "#9C2542", "#CB6D51", "#0077BE", "#C23B22", "#FFB347", "#836953", "#FF6961"];
    this.state = {
      letters : this.props.start ? [{letter: this.props.start, color: "#966FD6"}] : []
    };



    this.addList = this.addList.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.start)
    {
      this.setState({letters : [{letter: nextProps.start, color: "#966FD6"}]});
    }
  }

  addList() {
    let i = 0;
    let j = 0;

    if (this.state.letters.length > 0)
    {
      let l = this.state.letters[this.state.letters.length - 1];
      i = (Array.from(this.letterlist).indexOf(l.letter) + 1) % 26;
      j = (this.colors.indexOf(l.color) + 1) % 9;
    }

    this.setState({letters : [...this.state.letters, {letter: this.letterlist.charAt(i), color: this.colors[j]}]});
  }

  render() {
    return (
      <div>
        <h5>Try with some initial letters</h5>
        {Array.from(this.letterlist).map((n, i) => (<IndexLink key={i} to={'/add/letter/' + n}>{n}</IndexLink>))}
        <br/>
        <AddBlock click={this.addList} text="Add Letter!" ></AddBlock>
        <List letters={this.state.letters} ></List>
      </div>
    );
  }
}

export default LetterList
