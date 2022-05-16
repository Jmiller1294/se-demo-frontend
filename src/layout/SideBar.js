import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 700px;
  width: 100%;
  padding-top: 40px;
`
const Category = styled.h2`
  color: #000000;
  margin-top: 20px;
`
const SideBar = (props) => {
  return (
    <Container>
      {props.products.map(product => <a href={product.url}><Category>{product.product}</Category></a>)}
    </Container>
  )
}
export default SideBar;