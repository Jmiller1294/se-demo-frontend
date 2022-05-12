import React from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  height: 100px;
  width: 450px;
`
const SearchInput = styled.input` 
  height: 45px;  
  flex-basis: 100%;
  margin: 0;
  border-radius: 5px;
`

const SearchBar = () => {
  return (
    <SearchForm>
      <SearchInput 
        type='text'
        placeholder="Search"
      />
    </SearchForm>
  )
  
}
export default SearchBar;