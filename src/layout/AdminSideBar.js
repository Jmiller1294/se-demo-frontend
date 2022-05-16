import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #212121;
  color: #d3d3d3;
  height: 800px;
  width: 100%;
  padding-top: 55px;
  line-height: 2.5;
`
const Category = styled.span`
  font-size: 20px;
`
const AdminSideBar = (props) => {
  return (
    <Container>
      <Category>Home</Category>
      <Category>All Products</Category>
      <Category>Users</Category>
      <Category>All Orders</Category>
      <Category></Category>
    </Container>
  )
}
export default AdminSideBar;