import React from 'react';
import { Header, Title } from '../styles/TopHeaderElements';
import SearchBar from '../components/SearchBar';



const TopHeader = (props) => {
  
  return(
    <>
      <Header>
        <Title>First Responder Equipment</Title>
        <SearchBar />
        Hello
      </Header>
    </>
  )
}
export default TopHeader;