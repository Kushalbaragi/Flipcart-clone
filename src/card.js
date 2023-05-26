import React from "react";
import "./style/card.scss";

function Card({ product }) {
  console.log(product);

  return (
    <section className="card-wrapper">
      <img src={product.images[0]} />
      <p className="title">{product.title}</p>
      <span className='price'>Just {product.price}</span> 
      <strike className='og-price'>{product.originalPrice}</strike>     
      <div className='btn-wrapper'><button>Buy Now</button></div>
    </section>
  );
}

export default Card;
