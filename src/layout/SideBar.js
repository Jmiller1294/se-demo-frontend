import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 700px;
  width: 100%;
  padding-top: 40px;
`
const Category = styled.h3`
  color: #000000;
  margin-top: 20px;
`
const Header = styled.h2`
  border-bottom: 2px solid black;
  padding-bottom: 20px;
  margin-left: 25px;
`
const SideBar = (props) => {
  return (
    <Container>
      <Header>{props.title}</Header>
      {props.products.map(product => <a href={product.url}><Category>{product.product}</Category></a>)}
    </Container>
  )
}
export default SideBar;