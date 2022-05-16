import React from "react";
import styled from "styled-components";
import Image from '../assests/Banner.jpg';
import FireSuitImage from '../assests/firesuit2.jpg';
import HelmetImage from '../assests/helmet.png';
import HolsterImage from '../assests/holster.jpg';
import VestImage from '../assests/vest.jpg';
import NavBar from "../layout/NavBar";
import TopHeader from "../layout/TopHeader";
import { Grid, Row, Col } from "../layout/Grid";
import Footer from "../layout/Footer";
import '../styles/Home.css';
import '../styles/Style.css';
import '../styles/Slideshow.css';

const Banner = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  flex-basis: 100%;
`

const BannerImg = styled.img`
  height: 500px;
  flex-basis: 100%;
`
const Container = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;
`
const ProductImage = styled.img`
  height: 350px;
  width: 20%;
`


const Home = () => {
  return (
    <>
      <TopHeader />
      <NavBar />
      <Grid>
        <Row height={'500px'}>
          <Col size={1}>
            <Banner>
              <BannerImg src={Image} />
            </Banner>
          </Col>
        </Row>
        <Row  height={'500px'}>
          <Col size={1}>
           <h2>Featured Products</h2>
           <Container>
            <ProductImage src={HolsterImage}/>
            <ProductImage src={FireSuitImage}/>
            <ProductImage src={HolsterImage}/>
            <ProductImage src={VestImage}/>
           </Container>
          </Col>
        </Row>
        <Row  height={'450px'} background={'#00264D'}>
          <Col size={1}>
           
          </Col>
        </Row>
        <Row  height={'400px'}>
          <Col size={1}>
           
          </Col>
        </Row>
        <Row  height={'150px'} background={'#00264D'} padding={'20px 0'}>
          <Col size={1}>
           <Footer />
          </Col>
        </Row>
      </Grid>
    </>
  )
}
export default Home;