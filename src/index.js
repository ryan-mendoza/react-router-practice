import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Ryan from './Ryan';
import NotFound from './NotFound';
import Menu from './Menu';
import Home from './Home';
import Posts from './Posts';
import About from './About';

ReactDOM.render(
  <Router>
    <Menu />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Posts' component={Posts} />
      <Route path='/About' component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
