import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './containers/Home/Home';
import App from './containers/App/App';
import Projects from './containers/Projects/Projects';

Router.prototype.componentWillReceiveProps = function(nextProps) {
  let components = [];
  function grabComponents(element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component);
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents);
    }
  }
  grabComponents(nextProps.routes || nextProps.children);
  components.forEach(React.createElement); // force patching
};

export default (
  <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
);
