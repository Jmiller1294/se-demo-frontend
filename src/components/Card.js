import React from "react";
import styled from "styled-components";


const Card = (props) => {
  return (
    <div class="card">
      <img src={props.image} alt="Avatar" />
      <div class="container">
        <p>{props.name}</p>
        <p class="price">$19.99</p>
        <p><button>Add to Cart</button></p>
      </div>
    </div>
  )
}
export default Card;