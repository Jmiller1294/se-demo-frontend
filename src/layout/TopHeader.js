import React from 'react';
import { Header, Title } from '../styles/TopHeaderElements';
import SearchBar from '../components/SearchBar';
import CartIcon from '../assests/cart.png';
import styled from 'styled-components';

const CartCon = styled.img`
  height: 30px;
  
`

const TopHeader = (props) => {
  

  return(
    <>
      <Header>
        <Title>First Responder Equipment</Title>
        <SearchBar />
       
      </Header>
    </>
  )
}
export default TopHeader;