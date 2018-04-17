import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLinkContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false
      };
  this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}


render() {
    const bgPink = {backgroundColor: '#ec407a'}
  const container = {height: 1300}
    return (
          <div>
          <Router>
            <Navbar style={bgPink} dark expand="md scrolling">
                <NavbarBrand href="/">
                    <strong>Navbar</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick.this } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                      <NavItem active>
                          <NavLink to="#">Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="#">Features</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="#">Pricing</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#">Options</NavLink>
                      </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                      <NavItem>
                        <NavLink to="#"><Fa icon=facebook/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#"><Fa icon=twitter/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#"><Fa icon=instagram/></NavLink>
                      </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        </Router>

        <Container style={container} className="text-center mt-5">
          <h2>This Navbar is fixed</h2>
          <h5>It will always stay visible on the top, even when you scroll do</h5>
          <br/>
          <p>Full page intro with background image will be always displayfull screen mode, regardless of device </p>
        </Container>

      </div>
    );
  }
}

export default FixedNavbarExample;
