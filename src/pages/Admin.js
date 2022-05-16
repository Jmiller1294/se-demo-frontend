import React from "react";
import { Grid, Row, Col } from "../layout/Grid";
import styled from "styled-components";
import AdminSideBar from "../layout/AdminSideBar";

const Container = styled.div`
  height: 200px;
  width: 95%;
  background-color: #ffffff;
  margin: 20px auto;
`
const Logout = styled.a`
  text-decoration: none;
  font-size: 17px;
  
`
const Message = styled.span`
  font-size: 17px;
  color: #ffffff;
  margin-right: 1100px;
`

const Admin = () => {
  return (
    <Grid>
      <Row background={'#212121'} height={'35px'} padding={'10px 0 10px 10px'}>
        <Col size={1}>
          <Message>Hello, Admin</Message>
          <Logout href="/">Logout</Logout>
        </Col>
      </Row>
      <Row background={'#d3d3d3'} height={'800px'}>
        <Col size={1}>
          <AdminSideBar />
        </Col>
        <Col size={4}>
          <h2>Admin Dashboard</h2>
          <Container>
            <h3>Orders</h3>
          </Container>
          <Container>
            <h3>New Users</h3>
          </Container>
          <Container>
            <h3>New Products</h3>
          </Container>
        </Col>
      </Row>
    </Grid>
  )
}
export default Admin;