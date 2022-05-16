import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Header = styled.header`
  position: ${props => props.fixed ? 'fixed' : 'none'};
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 220px;
  font-weight: bold;
  background-color: #00264D;
  border-bottom: 1px solid #656565;
`
export const Title = styled.h1`
  justify-self: left;
  color: #ffffff;
  font-size: 25px;
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
