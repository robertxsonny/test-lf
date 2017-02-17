import React from 'react';
import AddBlock from './AddBlock';
import List from './List';
import { IndexLink } from 'react-router';

class NumberList extends React.Component {
  constructor(props) {
    super(props);
    this.colors = ["#966FD6", "#779ECB", "#9C2542", "#CB6D51", "#0077BE", "#C23B22", "#FFB347", "#836953", "#FF6961"];
    this.state = {
      numbers : this.props.start ? [{letter: this.props.start, color: "#966FD6"}] : []
    };
    this.addList = this.addList.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.start)
    {
      this.setState({numbers : [{letter: nextProps.start, color: "#966FD6"}]});
    }
  }

  addList() {
    let i = 0;
    let j = 0;

    if (this.state.numbers.length > 0)
    {
      let l = this.state.numbers[this.state.numbers.length - 1];
      i = (Number(l.letter) + 1);
      j = (this.colors.indexOf(l.color) + 1) % 9;
    }

    this.setState({numbers : [...this.state.numbers, {letter: i, color: this.colors[j]}]});
  }

  render() {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div>
        <h5>Try with some initial numbers</h5>
        {nums.map((n, i) => (<span key={i}><IndexLink to={'/add/number/' + n}>{n}</IndexLink>  </span>))}
        <br/>
        <AddBlock click={this.addList} text="Add Number!" ></AddBlock>
        <List letters={this.state.numbers} ></List>
      </div>
    );
  }
}

export default NumberList
