import React from "react";
import SideBar from "../layout/SideBar";
import { Grid, Row, Col } from '../layout/Grid';
import { fireCatagories, policeCategories, fireProducts } from '../data/data';
import NavBar from "../layout/NavBar";
import TopHeader from "../layout/TopHeader";
import Card from "../components/Card";
import vestPic from '../assests/vest.jpg';
import '../styles/Style.css';
import '../styles/Shopping.css'



const FireProducts = () => {
  return (
    <Grid>
      <TopHeader />
      <NavBar />
      <Row>
        <Col size={1}>
          <SideBar products={fireCatagories}/>
        </Col>
        <Col size={4}>
          <div id="product_grid">
            {fireProducts.map(product => <Card image={vestPic} name={product.name}/>)}
          </div>
        </Col>
      </Row>
    </Grid>
  )
}
export default FireProducts;