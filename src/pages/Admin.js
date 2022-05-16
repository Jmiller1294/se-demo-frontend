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

const Admin = () => {
  return (
    <Grid>
      <Row background={'#212121'} height={'35px'} padding={'10px'}>
        <Col size={1}>
          <a href="/">Logout</a>
        </Col>
      </Row>
      <Row background={'#d3d3d3'} height={'800px'}>
        <Col size={1}>
          <AdminSideBar />
        </Col>
        <Col size={4}>
          <h2>Dashboard</h2>
          <Container>
            jaasa
          </Container>
          <Container>
            sada
          </Container>
          <Container>
            ffff
          </Container>
        </Col>
      </Row>
    </Grid>
  )
}
export default Admin;