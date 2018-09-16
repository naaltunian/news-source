import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Navigation = () => {
  return(
    <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <h1>News Source</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              About
            </NavItem>
            <NavItem eventKey={2}>
              News
            </NavItem>
            <NavItem eventKey={3}>
              Wolfram
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Navigation;
