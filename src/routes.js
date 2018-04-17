import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './containers/Home/Home';
import App from './containers/App/App';

export default (
  <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/" component={Home} />
      </div>
    </Router>
);
