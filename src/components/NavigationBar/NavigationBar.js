import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";


class NavigationBar extends Component {
  render () {
    return (
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Diego Krefta</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/projects">
      Projects
    </NavItem>
    <NavItem eventKey={2} href="#">
      Contact
    </NavItem>
  </Nav>
</Navbar>
);
    }
  }

export default NavigationBar;
