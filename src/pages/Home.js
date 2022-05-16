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
const PictureContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;
`
const ReviewContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;
  padding: 0 50px;
`
const ProductImage = styled.img`
  height: 350px;
  width: 20%;
`
const ReviewHeader = styled.h4`
  position: relative;
  right: 480px;
  width: 100%;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`
const Line = styled.hr`
  margin: 0 90px;
`
const Review = styled.p`
  height: 400px;
  width: 22%;
  font-size: 18px;
  color: #ffffff;
  line-height: 1.5;
`
const InformationForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
`
const FormInput = styled.input`
  height: 50px;
  width: 25%;
`
const FormButton = styled.button`
  height: 50px;
  width: 10%;
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
           <PictureContainer>
            <ProductImage src={HolsterImage}/>
            <ProductImage src={FireSuitImage}/>
            <ProductImage src={HolsterImage}/>
            <ProductImage src={VestImage}/>
           </PictureContainer>
          </Col>
        </Row>
        <Row  height={'450px'} background={'#00264D'}>
          <Col size={1}>
            <ReviewHeader>Reviews From Our Customers</ReviewHeader>
            <Line />
            <ReviewContainer>
              <Review>
                They always have the best
                equipment at the best prices.
                The shipping was fast and easy.
                Helping Fire and Police Departments 
                around the country. Thank you first Responders!
                <br />
                <br />
                - Dennis Miller
                <br />
                5/20/20
              </Review>
              <Review>
                They always have the best
                equipment at the best prices.
                The shipping was fast and easy.
                Helping Fire and Police Departments 
                around the country. Thank you first Responders!
                <br />
                <br />
                - Dennis Miller
                <br />
                5/20/20
              </Review>
              <Review>
                They always have the best
                equipment at the best prices.
                The shipping was fast and easy.
                Helping Fire and Police Departments 
                around the country. Thank you first Responders!
                <br />
                <br />
                - Dennis Miller
                <br />
                5/20/20
              </Review>
              <Review>
                They always have the best
                equipment at the best prices.
                The shipping was fast and easy.
                Helping Fire and Police Departments 
                around the country. Thank you first Responders!
                <br />
                <br />
                - Dennis Miller
                <br />
                5/20/20
              </Review>
            </ReviewContainer>
          </Col>
        </Row>
        <Row  height={'400px'}>
          <Col size={1}>
            <InformationForm>
              <FormInput type='text' />
              <FormButton>Submit</FormButton>
            </InformationForm>
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