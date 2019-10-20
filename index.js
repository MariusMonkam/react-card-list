import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import SinglePage from './src/SinglePage';
import PageList from './src/PageList';
import './style.css';

class App extends Component {
 
 render() {
    return (
      <Router>
      <div>
       <Switch>
       <Route path="/" component={PageList} exact/>
       <Route path="/:header" component={SinglePage}/>
       </Switch>
      </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
