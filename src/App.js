import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import News from "./components/News"
import About from "./components/About"
import Navbar from "./components/CustomNavBar"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
