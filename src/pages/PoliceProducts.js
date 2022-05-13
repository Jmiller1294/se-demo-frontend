import React from "react";
import { Grid, Row, Col } from "../layout/Grid";
import SideBar from "../layout/SideBar";
import '../styles/Style.css';
import '../styles/Shopping.css'

const policeProducts = ['TASERS', 'VISORS', 'VESTS'];

const PoliceProducts = () => {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <SideBar products={policeProducts} />
        </Col>
        <Col size={1}>
        <div id="product_grid">
    <div class="card">
        <img src="image/img_avatar.png" alt="Avatar" />
        <div class="container">
          <p>Software  Engineer</p>
          <p class="price">$19.99</p>
          <p><button>Add to Cart</button></p>
        </div>
      </div>
      <div class="card">
        <img src="image/img_avatar.png" alt="Avatar" />
        <div class="container">
            <p>Software  Engineer</p>
            <p class="price">$19.99</p>
           <p><button>Add to Cart</button></p>
          
        </div>
      </div>

      <div class="card">
        <img src="image/img_avatar.png" alt="Avatar" />
        <div class="container">
          <p>Software  Engineer</p>
          <p class="price">$19.99</p>
          <p><button>Add to Cart</button></p>
        </div>
      </div>
      <div class="card">
        <img src="image/img_avatar.png" alt="Avatar" />
        <div class="container">
            <p>Software  Engineer</p>
            <p class="price">$19.99</p>
           <p><button>Add to Cart</button></p>
          
        </div>
      </div>
      <div class="card">
        <img src="image/img_avatar.png" alt="Avatar" />
        <div class="container">
            <p>Software  Engineer</p>
            <p class="price">$19.99</p>
           <p><button>Add to Cart</button></p>
          
        </div>
      </div>

      <div class="card">
        <img src="image/img_avatar.png" alt="Avatar" />
        <div class="container">
            <p>Software  Engineer</p>
            <p class="price">$19.99</p>
           <p><button>Add to Cart</button></p>
         
        </div>
         </div>
      </div>
        </Col>
      </Row>
    </Grid>

  

  )
}
export default PoliceProducts;