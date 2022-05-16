import React from "react";
import { Grid, Row, Col } from "../layout/Grid";
import styled from "styled-components";
import AdminSideBar from "../layout/AdminSideBar";

const Container = styled.div`
  height: 250px;
  width: 95%;
  background-color: #ffffff;
  padding: 0 20px;
  margin: 20px auto;
`
const Logout = styled.a`
  text-decoration: none;
  font-size: 17px;
  
`
const Title = styled.h2`
  position: relative;
  top: 5px;
  right: 450px;
  margin-bottom: 5px;
`
const Message = styled.span`
  font-size: 17px;
  color: #ffffff;
  margin-right: 1100px;
`
const OrdersList = styled.ul`
  list-style: none;
`
const Order = styled.div`
`

const Admin = () => {
  return (
    <Grid>
      <Row background={'#212121'} height={'35px'} padding={'10px 0 10px 10px'}>
        <Col size={1}>
          <Message>Hello,  Admin</Message>
          <Logout href="/">Logout</Logout>
        </Col>
      </Row>
      <Row background={'#d3d3d3'} height={'1000px'}>
        <Col size={1}>
          <AdminSideBar />
        </Col>
        <Col size={4}>
          <h1>Admin Dashboard</h1>
          <Container>
            <Title> Recent Orders</Title>
            <Row>
              <Col size={1}>
                <h4>Order #</h4>
                <hr />
                <Order>#100001</Order>
                <hr />
                <Order>#100002</Order>
                <hr />
                <Order>#100003</Order>
                <hr />
                <Order>#100004</Order>
              </Col>
              <Col size={1}>
                <h4>Date</h4>
                <hr />
                <Order>04/15/22</Order>
                <hr />
                <Order>04/17/22</Order>
                <hr />
                <Order>04/20/22</Order>
                <hr />
                <Order>04/21/22</Order>
              </Col>
              <Col size={1}>
                <h4>Status</h4>
                <hr />
                <Order>Shipped</Order>
                <hr />
                <Order>Shipped</Order>
                <hr />
                <Order>Processed</Order>
                <hr />
                <Order>Processed</Order>
              </Col>
              <Col size={1}>
                <h4>Total</h4>
                <hr />
                <Order>$6500.00</Order>
                <hr />
                <Order>$1020.00</Order>
                <hr />
                <Order>$2250.00</Order>
                <hr />
                <Order>$1100.00</Order>
              </Col>
            </Row>
          </Container>
          <Container>
            <Title>Newest Users</Title>
            <Row>
              <Col size={1}>
                <h4>Name</h4>
                <hr />
                <Order>Justin</Order>
                <hr />
                <Order>Gabriel</Order>
                <hr />
                <Order>Madeline</Order>
                <hr />
                <Order>Marquis</Order>
              </Col>
              <Col size={1}>
                <h4>Signup Date</h4>
                <hr />
                <Order>05/10/22</Order>
                <hr />
                <Order>05/12/22</Order>
                <hr />
                <Order>05/14/22</Order>
                <hr />
                <Order>05/16/22</Order>
              </Col>
              <Col size={1}>
                <h4>Status</h4>
                <hr />
                <Order>Approved</Order>
                <hr />
                <Order>Approved</Order>
                <hr />
                <Order>Pending</Order>
                <hr />
                <Order>Pending</Order>
              </Col>
              <Col size={1}>
                <h4>Organization</h4>
                <hr />
                <Order>Fire</Order>
                <hr />
                <Order>Police</Order>
                <hr />
                <Order>Police</Order>
                <hr />
                <Order>Fire</Order>
              </Col>
            </Row>
          </Container>
          <Container>
            <Title>New Products</Title>
            <Row>
              <Col size={1}>
                <h4>Name</h4>
                <hr />
                <Order>Taser 3000</Order>
                <hr />
                <Order>Bullet Proof Helmet</Order>
                <hr />
                <Order>Night Vision Goggles</Order>
                <hr />
                <Order>Tactical Vest</Order>
              </Col>
              <Col size={1}>
                <h4>Date Added</h4>
                <hr />
                <Order>05/05/22</Order>
                <hr />
                <Order>05/06/22</Order>
                <hr />
                <Order>05/10/22</Order>
                <hr />
                <Order>05/11/22</Order>
              </Col>
              <Col size={1}>
                <h4>Moderator</h4>
                <hr />
                <Order>Police Surplus</Order>
                <hr />
                <Order>Tactical Gear</Order>
                <hr />
                <Order>Advanced Equipment</Order>
                <hr />
                <Order>Army Surplus</Order>
              </Col>
              <Col size={1}>
                <h4>Total Sold</h4>
                <hr />
                <Order>15</Order>
                <hr />
                <Order>25</Order>
                <hr />
                <Order>5</Order>
                <hr />
                <Order>9</Order>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Grid>
  )
}
export default Admin;