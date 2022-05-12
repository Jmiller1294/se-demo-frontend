import React from "react";
import styled from "styled-components";
import Image from '../assests/Banner.jpg';
import '../styles/Home.css';
import '../styles/Style.css';
import '../styles/Slideshow.css';

const Banner = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  flex-basis: 100%;
  margin-top: 30px;
`

const BannerImg = styled.img`
  height: 400px;
  flex-basis: 80%;
`


const Home = () => {
  return (
    <>
      <Banner>
        <BannerImg src={Image} />
      </Banner>
    </>
  )
}
export default Home;