import React from "react";
import SideBar from "../layout/SideBar";
import { fireProducts } from "../data/data";

import { Grid, Row, Col } from "../layout/Grid";

const Goggles = () => {
  return(
    <Grid>
      <Row>
        <Col size={1}>
          <SideBar products={fireProducts}/>
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
        </div>

        </Col>
      </Row>
    </Grid>
  )
}
export default Goggles;