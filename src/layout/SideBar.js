import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  height: 700px;
  width: 100%;
  padding-top: 40px;
`
const Category = styled.h2`

`
const SideBar = (props) => {
  return (
    <Container>
      {props.products.map(product => <a href={product.url}><Category>{product.product}</Category></a>)}
    </Container>
  )
}
export default SideBar;