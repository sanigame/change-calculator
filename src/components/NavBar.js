import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Change-Calculator</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
};

export default NavBar;