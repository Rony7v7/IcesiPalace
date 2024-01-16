import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "../styles/Header.css";
import AuthService from '../services/AuthService';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className='header'>
        <NavbarBrand href="/">Icesi Palace</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {
              currentUser ? (
                <NavItem>
                  <NavLink  href="/#">{currentUser.username}</NavLink>
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <NavLink href="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/register">Register</NavLink>
                  </NavItem>
                </>
              )
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
