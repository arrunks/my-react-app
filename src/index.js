import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './css/index.css';
import './css/bootstrap.min.css';

ReactDOM.render(
  (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home}/>
    	<Route path="about" component={About}/>
    	<Route path="contact" component={Contact}/>
    	<Route path="*" component={App}/>
    </Route>
  </Router>
),
  document.getElementById('root')
);
