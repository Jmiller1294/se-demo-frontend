import React from "react";
import { Grid, Row, Col } from "./Grid";
import styled from "styled-components";

const LinkCon = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  margin-left: 100px;
  margin-right: 100px;
  line-height: 1.3;
`


const Footer = () => {
  return (
    <Row>
      <Col size={1}>
        <LinkCon>
          
          <a>Contact us</a>
          <a>Customer Service</a>
          <a>Return Policy</a>
          <a>Shipping</a>
          <a>Order Tracking</a>
        </LinkCon>
      </Col>
      <Col size={1}>
        <LinkCon>
          <a>Sign Up For Emails</a>
          <a>Follow Us</a>
        </LinkCon>
      </Col>
    </Row>
  )
}
export default Footer;