import React, { useState } from 'react';
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
import { useEffect } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log(user);

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className=''>
      <Navbar className='header'>
        <NavbarBrand href="/">Icesi Palace</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {currentUser ? (
              <>
                <NavItem>
                  <NavLink href="#">{"Welcome"}</NavLink>
                </NavItem>
                {/* Add other authenticated user links here */}
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/register'>Register</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;