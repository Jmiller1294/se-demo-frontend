import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  position: ${props => props.fixed ? 'fixed' : 'none'};
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 55px;
  padding: 0 120px;
  font-weight: bold;
  background-color: #000000;
`
export const NavLink = styled(Link)`
  padding-bottom: 10px;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 2.5px;
  border: 2px solid transparent;

  &:hover {
   
  }

 
`
export const NavBtn = styled.nav`
  align-self: center;
  display: flex;
  height: 55%;
  width: 8%;
  margin-right: 24px;
  text-align: center; 
`
export const NavBtnLink = styled(Link)`
  display: flex;
  border-radius: 10px;
  background: #FF9531;
  padding: 10px;
  flex-basis: 100%;
  font-weight: bold;
  color: black;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  justify-content: center;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000000;
  }
`
