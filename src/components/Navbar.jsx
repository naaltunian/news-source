import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return(
    <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'><h1>News Source</h1></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/news">News</Link>
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
