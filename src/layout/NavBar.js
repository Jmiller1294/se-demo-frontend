import React from 'react';
//import { useLocation } from 'react-router';
import { Nav, NavLink } from '../styles/NavBarElements';


const NavBar = (props) => {
  
  return(
    <>
      <Nav {...props}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Contact</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Nav>
    </>
  )
}
export default NavBar;