import React from 'react';
import LetterList from './LetterList';
import NumberList from './NumberList';
import App from './App';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import cookie from 'react-cookie';

class PageContent extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={IndexNav}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path='add' component={AddHeader}>
            <Route path='letter(/:start)' component={LetterContent} />
            <Route path='number(/:start)' component={NumberContent} />
          </Route>
        </Route>
      </Router>
    )
  }
}
const Home = () => <h1>Hello from the other side! <small>- Adele, 2015</small></h1>
const IndexNav = (props) => (
  <div>
    <App />
    {props.children}
  </div>
  )
const AddHeader = (props) => (
  <div>
    <h1>Add items to this blocks</h1>
    {props.children}
  </div>
)
const LetterContent = (props) => (<div><LetterList {...props.params.start ? {start: props.params.start} : {}} /></div>)
const NumberContent = (props) => (<div><NumberList {...props.params.start ? {start: props.params.start} : {}} /></div>)

export default PageContent
