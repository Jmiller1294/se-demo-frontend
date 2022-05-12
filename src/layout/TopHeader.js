import React from 'react';
import { Header, Title } from '../styles/TopHeaderElements';
import SearchBar from '../components/SearchBar';



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