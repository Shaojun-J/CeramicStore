import React from "react";
import Stars from "./Stars"

const ProductInfo = (props) => {
  const included = props.included.map((item) => item);
  const handleAdd=()=>{
    
  }
  
  return (
    <div className="products-container">
      <p className="product-name">{props.name}</p>
      <p className="card-price">${props.price}</p>
      <div className="rate">
        <span className="stars-box">
          <Stars 
          rate={props.rate}
          />
        </span>
        <span className="rate">{props.rate}</span>
        <span className="review-number">({props.reviewNumber})reviews</span>
      </div>
      <hr className="line margin-top-bottom"/>
      
      <p className="about-card-body margin-top-bottom font-color-black">
        included:
        <br />
        {included}
      </p>
      <p className="about-card-body font-color-black">{props.detail}</p>
      <label htmlFor="quantity">Quantity:</label>
      <br />
      <input
        className="quantity"
        type="number"
        value="1"
        id="quantity"
      ></input>
      <br />
      <input
        className="button btn-add-to-cart btn-blue"
        type="button"
        onClick={handleAdd}
        value="Add to Cart"
      ></input>
    </div>
  );
};

export default ProductInfo;
